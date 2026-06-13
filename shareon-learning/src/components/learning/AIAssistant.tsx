import { motion } from "framer-motion";
import { Sparkles, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROMPTS = [
  "What should I learn next based on my profile?",
  "Recommend courses for personal branding.",
  "How do I structure a viral LinkedIn post?",
  "Explain Brand Voice AI to me."
];

export default function AIAssistant() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-[100%] blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4 ring-1 ring-primary/20">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-bright">AI Mentor</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stuck on a concept? Need curriculum recommendations? ShareOn AI is ready to guide your learning journey 24/7.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#161B22] rounded-2xl border border-[rgba(96,165,250,0.2)] shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="h-12 border-b border-[rgba(96,165,250,0.1)] flex items-center px-4 bg-[#111827]">
              <div className="flex gap-2 items-center">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-white">ShareOn AI Assistant</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex gap-4 mb-8">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="bg-[#111827] border border-[rgba(96,165,250,0.1)] rounded-2xl rounded-tl-sm p-4 text-sm text-gray-200">
                  <p className="mb-2 font-semibold text-white">Welcome back, Creator.</p>
                  <p>I've analyzed your recent progress. You're doing great on the "Personal Brand Mastery" course. Ready to strengthen your influence today?</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {PROMPTS.map((prompt, i) => (
                  <button 
                    key={i}
                    className="text-left px-4 py-3 rounded-xl border border-[rgba(96,165,250,0.15)] bg-background hover:bg-[#111827] hover:border-primary/40 text-sm text-muted-foreground hover:text-white transition-all flex items-center justify-between group"
                  >
                    <span className="truncate pr-2">{prompt}</span>
                    <MessageSquare className="h-4 w-4 opacity-0 group-hover:opacity-100 text-primary transition-opacity shrink-0" />
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask anything about building your brand..." 
                  className="w-full bg-[#0A0A0A] border border-[rgba(96,165,250,0.2)] rounded-xl py-4 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
                  readOnly
                />
                <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-primary rounded-lg hover:bg-primary/90">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}