import { WhatsAppWidget } from "./ui/WhatsAppWidget";
import { Chatbot } from "./Chatbot";

export function FloatingWidgets() {
  return (
    <div className="fixed bottom-6 right-6 z-[10000] flex flex-col gap-4 items-end">
      {/* Chatbot Button is managed inside Chatbot component, but we can wrap it or unify it */}
      <Chatbot />
      <WhatsAppWidget />
    </div>
  );
}
