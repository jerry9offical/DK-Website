"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

const GREETING: ChatMessage = {
  role: "assistant",
  text: "Hi! I'm Dorcas's booking assistant. Tell me a bit about your event, brand, or project and I'll help get you sorted.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [sessionId] = useState(() => crypto.randomUUID());
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
      if (data.whatsappUrl) setWhatsappUrl(data.whatsappUrl);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong — you can reach out directly on WhatsApp instead.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-[28rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-gold/15 bg-ink/95 shadow-2xl shadow-black/60 backdrop-blur"
          >
            <div className="flex items-center justify-between border-b border-gold/15 px-4 py-3">
              <span className="font-display text-sm text-cream">
                Chat with <span className="text-gold">Dorcas&apos;s</span> Assistant
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-cream-dim transition-colors hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[85%] rounded-xl px-3 py-2 text-sm",
                    m.role === "assistant"
                      ? "bg-white/5 text-cream-dim"
                      : "ml-auto bg-gold/15 text-cream"
                  )}
                >
                  {m.text}
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-xs text-cream-dim/70">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Typing…
                </div>
              )}
            </div>

            {whatsappUrl && (
              <div className="px-4 pb-2">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button type="button" size="sm" className="w-full">
                    Continue on WhatsApp
                  </Button>
                </a>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-gold/15 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="w-full rounded-lg border border-gold/15 bg-white/5 px-3 py-2 text-sm text-cream placeholder:text-cream-dim/50 focus:border-gold/50 focus:outline-none"
              />
              <Button type="submit" size="sm" disabled={loading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold text-ink shadow-xl shadow-black/40"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
