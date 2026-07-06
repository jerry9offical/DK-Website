import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.name !== "string" || !body.name.trim()) {
    return Response.json({ error: "Name is required" }, { status: 400 });
  }

  const lead = await prisma.lead.create({
    data: {
      name: body.name,
      organisation: body.organisation || null,
      email: body.email || null,
      phone: body.phone || null,
      service: body.service || null,
      eventDate: body.date ? new Date(body.date) : null,
      budget: body.budget || null,
      message: body.message || null,
      source: body.source === "chatbot" ? "chatbot" : "contact_form",
      sessionId: body.sessionId || null,
    },
  });

  return Response.json({ id: lead.id });
}
