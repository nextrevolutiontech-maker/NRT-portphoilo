import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Next Revolution Tech. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
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

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
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
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] md:w-[400px] max-w-[calc(100vw-2rem)] h-[calc(100vh-6rem)] sm:h-[600px] max-h-[calc(100vh-2rem)] bg-card rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-blue-600 text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Next Revolution Tech</div>
                  <div className="text-xs text-primary-foreground/90">Online - We're here to help</div>
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

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/10">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-card text-card-foreground border border-border rounded-bl-none shadow-sm"
                      }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <div
                      className={`text-xs mt-1 ${message.sender === "user" ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-card border-t border-border">
                <div className="text-xs text-muted-foreground mb-2">Quick questions:</div>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-secondary hover:bg-secondary/80 text-secondary-foreground px-3 py-1.5 rounded-full transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-background border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-input text-foreground border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  onClick={handleSend}
                  className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50"
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}