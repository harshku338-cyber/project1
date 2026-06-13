import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[rgba(96,165,250,0.12)] bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-primary flex items-center justify-center relative">
            <span className="text-white text-xs font-bold">S</span>
            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-primary ring-2 ring-background shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          </div>
          <span className="font-semibold text-lg tracking-tight">ShareOn</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#learn" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Learn</a>
          <a href="#courses" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Courses</a>
          <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Resources</a>
          <a href="#certifications" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Certifications</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hidden sm:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <div className="h-8 w-8 rounded-full bg-muted border border-[rgba(96,165,250,0.2)] flex items-center justify-center overflow-hidden">
            <User className="h-4 w-4 text-muted-foreground" />
          </div>
          <Button className="hidden sm:flex bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] border-0">
            Upgrade
          </Button>
        </div>
      </div>
    </nav>
  );
}