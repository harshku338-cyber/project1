import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[#0A0A0A] -z-20"></div>
      
      {/* Glow edges */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoOTYsMTY1LDI1MCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 -z-10 mask-image-[radial-gradient(ellipse_at_center,black,transparent)]" style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'}}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-[#161B22]/80 backdrop-blur-xl border border-[rgba(96,165,250,0.2)] rounded-3xl p-8 md:p-16 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="inline-flex items-center justify-center p-3 bg-[#0A0A0A] rounded-2xl mb-8 border border-primary/20 shadow-inner">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Ready to Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-bright drop-shadow-sm">Recognized Personal Brand?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Stop guessing what content works. Access proven systems, AI-powered insights, and a community of elite creators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-14 px-8 text-base bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-[0_0_20px_rgba(59,130,246,0.4)] border-0 w-full sm:w-auto">
              Continue Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base border-primary/50 text-white hover:bg-primary/10 w-full sm:w-auto bg-[#0A0A0A]">
              Upgrade to Pro
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            Trusted by ambitious creators building their influence with ShareOn.
          </p>
        </motion.div>
      </div>
    </section>
  );
}