import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] bg-[#161B22] border border-[rgba(96,165,250,0.2)] rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="p-4 bg-gradient-to-r from-[#111827] to-[#161B22] border-b border-[rgba(96,165,250,0.1)] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">ShareOn AI</h3>
                  <p className="text-xs text-green-400">Online</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="h-[300px] p-4 overflow-y-auto bg-[#0A0A0A] flex flex-col gap-4">
              <div className="flex gap-2 max-w-[85%]">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="h-3 w-3 text-primary" />
                </div>
                <div className="bg-[#161B22] border border-[rgba(96,165,250,0.1)] rounded-xl rounded-tl-sm p-3 text-sm text-gray-200">
                  Hi there! I'm your ShareOn AI assistant. How can I help you build your brand today?
                </div>
              </div>
              
              <div className="flex gap-2 max-w-[85%]">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="h-3 w-3 text-primary" />
                </div>
                <div className="bg-[#161B22] border border-[rgba(96,165,250,0.1)] rounded-xl rounded-tl-sm p-3 text-sm text-gray-200">
                  You can ask me to recommend courses, review your content, or explain concepts.
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-[#111827] border-t border-[rgba(96,165,250,0.1)] relative">
              <input 
                type="text" 
                placeholder="Message AI..." 
                className="w-full bg-[#0A0A0A] border border-[rgba(96,165,250,0.2)] rounded-lg py-2 pl-3 pr-10 text-sm text-white focus:outline-none focus:border-primary/50"
              />
              <button className="absolute right-5 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center z-50 focus:outline-none group"
      >
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 group-hover:opacity-40"></div>
        {isOpen ? <X className="h-6 w-6 relative z-10" /> : <Bot className="h-6 w-6 relative z-10" />}
      </motion.button>
    </>
  );
}