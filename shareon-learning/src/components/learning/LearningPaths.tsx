import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, User, GraduationCap, Building2, Lightbulb, PenTool, CheckCircle2 } from "lucide-react";

const PATHS = [
  { id: "founder", title: "Founder", icon: Building2, desc: "Build authority while building your product." },
  { id: "coach", title: "Coach", icon: Lightbulb, desc: "Attract premium clients organically." },
  { id: "consultant", title: "Consultant", icon: Briefcase, desc: "Position yourself as the industry expert." },
  { id: "agency", title: "Agency Manager", icon: UsersIcon, desc: "Generate inbound leads for your firm." },
  { id: "educator", title: "Educator", icon: GraduationCap, desc: "Scale your impact and knowledge." },
  { id: "creator", title: "Creator", icon: PenTool, desc: "Monetize your audience effectively." }
];

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function LearningPaths() {
  const [activePath, setActivePath] = useState("founder");

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A]/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored <span className="text-primary">Learning Paths</span></h2>
          <p className="text-muted-foreground text-lg">Curated curriculums designed specifically for your professional role and goals.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PATHS.map((path, index) => {
            const isActive = activePath === path.id;
            const Icon = path.icon;
            
            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActivePath(path.id)}
                className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                  isActive 
                    ? "bg-[#161B22] border-primary shadow-[0_0_30px_rgba(59,130,246,0.15)]" 
                    : "bg-[#111827] border-[rgba(96,165,250,0.12)] hover:border-[rgba(96,165,250,0.3)] hover:bg-[#161B22]"
                } border`}
              >
                {isActive && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    <CheckCircle2 className="h-3 w-3" />
                    Recommended for You
                  </div>
                )}
                
                <div className={`h-12 w-12 rounded-xl mb-6 flex items-center justify-center transition-colors ${
                  isActive ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? "text-white" : "text-gray-300"}`}>
                  {path.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {path.desc}
                </p>
                
                <div className={`h-1 w-full rounded-full overflow-hidden ${isActive ? "bg-primary/20" : "bg-muted/50"}`}>
                  {isActive && (
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: "100%" }} 
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-primary"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}