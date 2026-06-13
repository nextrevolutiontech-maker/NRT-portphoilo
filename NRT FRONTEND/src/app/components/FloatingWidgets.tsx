import { WhatsAppWidget } from "./ui/WhatsAppWidget";
import { Chatbot } from "./Chatbot";

export function FloatingWidgets() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[10000] flex flex-col gap-3 sm:gap-4 items-end">
      <Chatbot />
      <WhatsAppWidget />
    </div>
  );
}
