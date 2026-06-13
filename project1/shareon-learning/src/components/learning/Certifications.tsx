import { motion } from "framer-motion";
import { Trophy, Star, Shield, ExternalLink, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Personal Brand Strategist",
    icon: Trophy,
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
    progress: 85,
    reqs: "Complete 4 core courses • Pass final assessment",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Content Creation Expert",
    icon: Star,
    color: "from-amber-400 to-orange-600",
    shadow: "shadow-amber-500/20",
    progress: 100,
    reqs: "Complete Content track • Generate 100k impressions",
    status: "Earned"
  },
  {
    id: 3,
    title: "Community Architect",
    icon: Shield,
    color: "from-emerald-400 to-teal-600",
    shadow: "shadow-emerald-500/20",
    progress: 30,
    reqs: "Complete Community track • Reach 1,000 active members",
    status: "Locked"
  }
];

export default function Certifications() {
  return (
    <section className="py-24 relative bg-[#0A0A0A]" id="certifications">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Earn Industry <span className="text-primary">Certifications</span></h2>
          <p className="text-muted-foreground text-lg">Prove your expertise with verifiable credentials recognized by top creators and brands.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = cert.icon;
            const isEarned = cert.status === "Earned";
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-[#161B22] rounded-2xl border ${isEarned ? 'border-primary/30' : 'border-[rgba(96,165,250,0.12)]'} p-8 relative overflow-hidden flex flex-col group`}
              >
                {/* Shimmer effect for earned certs */}
                {isEarned && (
                  <div className="absolute inset-0 -translate-x-[100%] animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 z-10 pointer-events-none"></div>
                )}
                
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${cert.color} shadow-lg ${cert.shadow} flex items-center justify-center mb-6 relative`}>
                  <Icon className="h-8 w-8 text-white drop-shadow-md" />
                  {isEarned && (
                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-background border border-primary flex items-center justify-center z-20">
                      <div className="h-3 w-3 rounded-full bg-primary animate-pulse"></div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                
                <p className="text-sm text-muted-foreground mb-6 h-10">
                  {cert.reqs}
                </p>
                
                <div className="mt-auto space-y-4">
                  {!isEarned ? (
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-white">{cert.progress}%</span>
                      </div>
                      <Progress value={cert.progress} className="h-2 bg-[#111827]" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-green-400 bg-green-400/10 px-3 py-2 rounded-lg border border-green-400/20">
                      <Trophy className="h-4 w-4" />
                      Credential Issued
                    </div>
                  )}
                  
                  <Button 
                    variant={isEarned ? "default" : "outline"} 
                    className={`w-full ${isEarned ? 'bg-[#0077b5] hover:bg-[#0077b5]/90 text-white border-0' : 'bg-transparent border-primary/20 text-white hover:bg-primary/10'}`}
                  >
                    {isEarned ? (
                      <>
                        <Linkedin className="mr-2 h-4 w-4" /> Add to Profile
                      </>
                    ) : (
                      <>
                        View Curriculum <ExternalLink className="ml-2 h-4 w-4 text-muted-foreground" />
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}