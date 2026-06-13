import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HoverModal } from "./ui/HoverModal";
import { API_BASE_URL } from "../../config";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverModalOpen, setHoverModalOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Next Revolution Tech. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    "Tell me about your services",
    "Schedule a consultation",
    "View case studies",
    "Pricing information",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Format history for Gemini SDK
      const history = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      const response = await fetch(`${API_BASE_URL}/api/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue, history }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Failed to get AI response");

      const botResponse: Message = {
        id: messages.length + 2,
        text: data.text,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
      return "Hello! How can I help you today?";
    } else if (input.includes("thank") || input.includes("thanks")) {
      return "You're welcome! Let me know if you need anything else.";
    } else if (input.includes("bye") || input.includes("goodbye")) {
      return "Goodbye! Have a great day.";
    } else if (input.includes("service") || input.includes("what do you do")) {
      return "We offer Custom Software Development, SaaS Development, AI & Automation, Cloud & DevOps, and more. Would you like to know more about any specific service?";
    } else if (input.includes("price") || input.includes("cost") || input.includes("pricing")) {
      return "Our pricing is customized based on project scope and requirements. I'd be happy to connect you with our team for a detailed quote. Would you like to schedule a consultation?";
    } else if (input.includes("consultation") || input.includes("meeting") || input.includes("schedule")) {
      return "Great! I can help you schedule a consultation. Please visit our Contact page or fill out the form there to book a meeting with our experts.";
    } else if (input.includes("case stud") || input.includes("project") || input.includes("portfolio")) {
      return "We've successfully delivered 10+ projects across various industries including Tech, Ecommerce, and SaaS. Check out our Case Studies page to see detailed examples of our work.";
    } else if (input.includes("contact") || input.includes("contect") || input.includes("reach") || input.includes("email") || input.includes("phone") || input.includes("form") || input.includes("redirect")) {
      return "You can reach us by filling out the form on our Contact page. We operate globally from Pakistan, serving clients worldwide.";
    } else {
      return "Thank you for your question! For detailed information, I recommend visiting our website or checking our specialized services. How else can I help you?";
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    handleSend();
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="relative z-50"
            onMouseEnter={() => setHoverModalOpen(true)}
            onMouseLeave={() => setHoverModalOpen(false)}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="bg-orange-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-orange-700 transition-colors border border-orange-500"
            >
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>
            <HoverModal
              isOpen={hoverModalOpen}
              onMouseEnter={() => setHoverModalOpen(true)}
              onMouseLeave={() => setHoverModalOpen(false)}
              position="top"
              align="end"
              className="!z-[10002] min-w-[300px] max-w-[350px]"
            >
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Chat with Us</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Get instant answers to your questions about our services, pricing, and more.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-zinc-800 transition-colors">
                    <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0 text-xs">
                      💬
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-900 dark:text-white">Quick Responses</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Get answers instantly</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-zinc-800 transition-colors">
                    <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0 text-xs">
                      📋
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-900 dark:text-white">Service Information</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Learn about our offerings</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-zinc-800 transition-colors">
                    <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0 text-xs">
                      📅
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-900 dark:text-white">Schedule Consultation</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Book a meeting with us</div>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setHoverModalOpen(false);
                  }}
                  className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors text-sm font-medium mt-2"
                >
                  Start Chat
                </button>
              </div>
            </HoverModal>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-0 right-0 z-[10001] w-full h-[100dvh] sm:bottom-24 sm:right-6 sm:w-[450px] sm:h-[calc(100vh-120px)] sm:max-h-[750px] bg-white dark:bg-zinc-900 rounded-none sm:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white p-4 flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('/noise.svg')] pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Next Revolution Tech</div>
                  <div className="text-xs text-white/90">Online - We're here to help</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <Minimize2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Embedded Live Chatbot */}
            <iframe 
              src="https://next-revolution-tech-ai.vercel.app/"
              className="flex-1 w-full h-full border-none"
              title="Next Revolution Tech AI Chatbot"
              allow="microphone;"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}