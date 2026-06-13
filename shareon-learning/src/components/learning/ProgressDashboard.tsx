import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Target, Flame, Award, ShieldCheck } from "lucide-react";

function Counter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = from;
    const end = to;
    if (start === end) return;
    const totalMilSec = duration * 1000;
    const incrementTime = (totalMilSec / end) * 2;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

const STATS = [
  { id: "lessons", label: "Lessons Completed", value: 42, icon: BookOpen, color: "text-blue-400" },
  { id: "courses", label: "Courses In Progress", value: 3, icon: Target, color: "text-sky-400" },
  { id: "streak", label: "Learning Streak", value: 14, suffix: " Days", icon: Flame, color: "text-orange-500" },
  { id: "certs", label: "Certificates Earned", value: 2, icon: Award, color: "text-yellow-400" },
  { id: "badges", label: "Skill Badges", value: 8, icon: ShieldCheck, color: "text-indigo-400" }
];

export default function ProgressDashboard() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-2">Your Progress</h2>
          <p className="text-muted-foreground text-sm">Track your learning journey and stay consistent.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#161B22] rounded-2xl border border-[rgba(96,165,250,0.12)] p-6 flex flex-col items-center text-center hover:border-primary/30 transition-colors"
              >
                <div className={`h-12 w-12 rounded-full bg-[#111827] border border-[rgba(96,165,250,0.05)] flex items-center justify-center mb-4 ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                <h4 className="text-3xl font-bold text-white mb-1">
                  <Counter from={0} to={stat.value} />
                  {stat.suffix && <span className="text-sm font-medium text-muted-foreground ml-1">{stat.suffix}</span>}
                </h4>
                
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}