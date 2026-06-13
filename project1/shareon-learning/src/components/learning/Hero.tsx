import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden min-h-[90vh] flex items-center" id="learn">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoOTYsMTY1LDI1MCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary w-fit backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              ShareOn Enterprise v2.0
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Learn</span>, Create, and Build an Influential <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-bright">Personal Brand</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Master ShareOn through AI-powered lessons, practical tutorials, and creator-focused strategies designed for elite professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="h-12 px-8 text-base bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-[0_0_20px_rgba(59,130,246,0.4)] border-0">
                <PlayCircle className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/50 text-white hover:bg-primary/10">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt={`User ${i}`} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by <strong className="text-white">10,000+</strong> ambitious creators.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Dashboard Mockup */}
              <div className="absolute inset-0 rounded-2xl bg-[#161B22] border border-[rgba(96,165,250,0.15)] shadow-2xl overflow-hidden flex flex-col transform rotate-y-[-10deg] rotate-x-[5deg] rotate-z-[2deg] perspective-1000">
                <div className="h-12 border-b border-[rgba(96,165,250,0.1)] flex items-center px-4 gap-2 bg-[#111827]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="mx-auto bg-black/50 px-4 py-1 rounded text-xs text-muted-foreground font-mono">shareon.app/dashboard</div>
                </div>
                
                <div className="flex-1 p-6 grid grid-cols-2 gap-4">
                  <div className="col-span-2 flex justify-between items-end mb-2">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Audience Growth</h3>
                      <p className="text-2xl font-bold text-white">+14,208</p>
                    </div>
                    <div className="flex items-center text-green-400 text-sm font-medium bg-green-400/10 px-2 py-1 rounded">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      24.5%
                    </div>
                  </div>
                  
                  <div className="h-32 bg-[#111827] rounded-xl border border-[rgba(96,165,250,0.05)] p-4 flex flex-col justify-end relative overflow-hidden">
                    <div className="absolute top-4 left-4 text-xs text-muted-foreground flex items-center"><Users className="h-3 w-3 mr-1" /> Followers</div>
                    <div className="flex items-end gap-1 h-12">
                      {[40, 50, 30, 70, 60, 90, 80].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="h-32 bg-[#111827] rounded-xl border border-[rgba(96,165,250,0.05)] p-4 flex flex-col justify-end relative overflow-hidden">
                    <div className="absolute top-4 left-4 text-xs text-muted-foreground flex items-center"><BarChart3 className="h-3 w-3 mr-1" /> Engagement</div>
                    <div className="flex items-end gap-1 h-12">
                      {[30, 40, 20, 50, 40, 60, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-secondary/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="col-span-2 bg-[#111827] rounded-xl border border-[rgba(96,165,250,0.05)] p-4 mt-2">
                    <h3 className="text-sm font-medium text-white mb-3">Recent Content</h3>
                    <div className="space-y-3">
                      {[1, 2].map((i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                              <span className="text-xs text-primary">Post</span>
                            </div>
                            <div className="space-y-1">
                              <div className="w-24 h-2 bg-muted/50 rounded"></div>
                              <div className="w-16 h-2 bg-muted/30 rounded"></div>
                            </div>
                          </div>
                          <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">High Impact</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-24 bg-card border border-primary/20 rounded-lg p-3 shadow-xl backdrop-blur-md flex items-center gap-3 z-20"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Weekly Reach</p>
                  <p className="text-sm font-bold text-white">1.2M Impressions</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}