import { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText, FileVideo, Download, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FILTERS = ["All", "Templates", "Case Studies", "FAQs", "Guides", "Success Stories"];

const RESOURCES = [
  {
    id: 1,
    type: "Templates",
    icon: FileText,
    title: "Notion Content Calendar",
    desc: "A comprehensive system to plan, write, and schedule your social media content.",
    action: "Download"
  },
  {
    id: 2,
    type: "Case Studies",
    icon: FileVideo,
    title: "0 to 10k LinkedIn Followers",
    desc: "How Sarah grew her audience in 90 days using the ShareOn methodology.",
    action: "View"
  },
  {
    id: 3,
    type: "Guides",
    icon: FileText,
    title: "Brand Voice Discovery Guide",
    desc: "Worksheet to define your unique tone of voice for AI generation.",
    action: "Download"
  },
  {
    id: 4,
    type: "Success Stories",
    icon: ExternalLink,
    title: "Monetizing a Small Audience",
    desc: "Interview with a creator making $10k/mo with 2,000 engaged followers.",
    action: "Read"
  },
  {
    id: 5,
    type: "Templates",
    icon: FileText,
    title: "Cold Email Outreach Sequence",
    desc: "Proven templates to secure podcast guest spots and collaborations.",
    action: "Download"
  },
  {
    id: 6,
    type: "Guides",
    icon: FileText,
    title: "Optimizing Your Profile",
    desc: "Checklist for LinkedIn, X (Twitter), and Instagram profile optimization.",
    action: "View"
  }
];

export default function ResourceCenter() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredResources = activeFilter === "All" 
    ? RESOURCES 
    : RESOURCES.filter(r => r.type === activeFilter);

  return (
    <section className="py-24 relative bg-[#0A0A0A]" id="resources">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-2">Resource <span className="text-primary">Center</span></h2>
            <p className="text-muted-foreground text-lg">Templates, guides, and tools to accelerate your growth.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-auto relative"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search resources..." 
              className="pl-9 w-full md:w-[300px] bg-[#111827] border-[rgba(96,165,250,0.2)] focus-visible:ring-primary h-10"
            />
          </motion.div>
        </div>

        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeFilter === filter 
                  ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(59,130,246,0.3)]" 
                  : "bg-[#161B22] text-muted-foreground hover:text-white border border-[rgba(96,165,250,0.1)] hover:border-primary/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[#161B22] rounded-2xl p-6 border border-[rgba(96,165,250,0.12)] hover:border-primary/40 hover:bg-[#1A222D] transition-all group flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground px-2 py-1 rounded bg-background border border-[rgba(96,165,250,0.1)]">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1 line-clamp-2">{resource.desc}</p>
                
                <Button variant="outline" className="w-full justify-between group-hover:border-primary/50 group-hover:text-primary transition-colors bg-transparent">
                  {resource.action}
                  {resource.action === "Download" ? <Download className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}