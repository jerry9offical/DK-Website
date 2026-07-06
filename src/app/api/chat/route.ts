import Anthropic from "@anthropic-ai/sdk";
import type { MessageParam, TextBlock, ToolUseBlock } from "@anthropic-ai/sdk/resources/messages";
import { prisma } from "@/lib/prisma";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CONTACT_DETAILS } from "@/content/contact";
import { SERVICES } from "@/content/services";
import { PACKAGES } from "@/content/packages";
import { FAQS } from "@/content/faq";

const MODEL = "claude-haiku-4-5-20251001";
const MAX_MESSAGE_LENGTH = 2000;

const anthropic = new Anthropic();

const SYSTEM_PROMPT = `You are the booking assistant on Dorcas Koki's website (dorcaskoki.com). Dorcas is a sports presenter, journalist, event host, and voiceover artist based in Port Harcourt, Rivers State, Nigeria.

Your job: answer visitor questions using only the information below, and warmly qualify serious leads — get their name, the service they need, and a phone/WhatsApp number or email to reach them. Once you have those three things (plus event date and budget if they've mentioned them), call the capture_lead tool. Keep replies short and conversational, not salesy. If someone asks about something outside what's listed, say Dorcas can discuss it directly on WhatsApp.

Services:
${SERVICES.map((s) => `- ${s.title}: ${s.description}`).join("\n")}

Packages:
${PACKAGES.map((p) => `- ${p.name} (${p.audience}): ${p.features.join(", ")}`).join("\n")}

FAQ:
${FAQS.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n")}

Location: ${CONTACT_DETAILS.location}`;

const CAPTURE_LEAD_TOOL: Anthropic.Tool = {
  name: "capture_lead",
  description:
    "Save a qualified lead once you have their name, the service they need, and a way to reach them (phone/WhatsApp or email).",
  input_schema: {
    type: "object",
    properties: {
      name: { type: "string" },
      service: { type: "string" },
      phone: { type: "string", description: "Phone or WhatsApp number, if given" },
      email: { type: "string", description: "Email address, if given" },
      organisation: { type: "string" },
      eventDate: { type: "string", description: "Event or project date, if mentioned" },
      budget: { type: "string" },
      message: { type: "string", description: "Short summary of what they need" },
    },
    required: ["name", "service"],
  },
};

function textFromMessage(content: (TextBlock | ToolUseBlock)[]): string {
  return content
    .filter((block): block is TextBlock => block.type === "text")
    .map((block) => block.text)
    .join("\n")
    .trim();
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const sessionId = typeof body?.sessionId === "string" ? body.sessionId : null;
  const message = typeof body?.message === "string" ? body.message.trim() : null;

  if (!sessionId || !message || message.length > MAX_MESSAGE_LENGTH) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  await prisma.chatMessage.create({
    data: { sessionId, role: "user", content: message },
  });

  const history = await prisma.chatMessage.findMany({
    where: { sessionId },
    orderBy: { createdAt: "asc" },
  });

  const messages: MessageParam[] = history.map((m) => ({
    role: m.role === "assistant" ? "assistant" : "user",
    content: m.content,
  }));

  const response = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    tools: [CAPTURE_LEAD_TOOL],
    messages,
  });

  const toolUse = response.content.find(
    (block): block is ToolUseBlock => block.type === "tool_use" && block.name === "capture_lead"
  );

  if (!toolUse) {
    const reply = textFromMessage(response.content as (TextBlock | ToolUseBlock)[]) ||
      "Sorry, could you say that again?";
    await prisma.chatMessage.create({
      data: { sessionId, role: "assistant", content: reply },
    });
    return Response.json({ reply });
  }

  const input = toolUse.input as {
    name: string;
    service: string;
    phone?: string;
    email?: string;
    organisation?: string;
    eventDate?: string;
    budget?: string;
    message?: string;
  };

  await prisma.lead.create({
    data: {
      name: input.name,
      service: input.service,
      phone: input.phone || null,
      email: input.email || null,
      organisation: input.organisation || null,
      eventDate: input.eventDate ? new Date(input.eventDate) : null,
      budget: input.budget || null,
      message: input.message || null,
      source: "chatbot",
      sessionId,
    },
  });

  const whatsappUrl = buildWhatsAppUrl(
    CONTACT_DETAILS.whatsappLink,
    {
      name: input.name,
      service: input.service,
      phone: input.phone,
      email: input.email,
      organisation: input.organisation,
      date: input.eventDate,
      budget: input.budget,
      message: input.message,
    },
    "New Chatbot Lead — dorcaskoki.com"
  );

  const followUp = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 512,
    system: SYSTEM_PROMPT,
    tools: [CAPTURE_LEAD_TOOL],
    messages: [
      ...messages,
      { role: "assistant", content: response.content },
      {
        role: "user",
        content: [
          {
            type: "tool_result",
            tool_use_id: toolUse.id,
            content: "Lead saved.",
          },
        ],
      },
    ],
  });

  const reply =
    textFromMessage(followUp.content as (TextBlock | ToolUseBlock)[]) ||
    "Thanks! Tap below to continue on WhatsApp and I'll get back to you shortly.";

  await prisma.chatMessage.create({
    data: { sessionId, role: "assistant", content: reply },
  });

  return Response.json({ reply, whatsappUrl });
}
