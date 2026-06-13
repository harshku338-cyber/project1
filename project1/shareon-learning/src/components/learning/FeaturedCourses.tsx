import { motion } from "framer-motion";
import { PlayCircle, Clock, BookOpen, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const COURSES = [
  {
    id: 1,
    title: "Personal Brand Mastery",
    category: "Strategy",
    instructor: "Elena R.",
    duration: "4h 30m",
    lessons: 12,
    progress: 45,
    rating: 4.9,
    color: "from-blue-500/20 to-blue-900/20"
  },
  {
    id: 2,
    title: "LinkedIn Growth Accelerator",
    category: "Social Media",
    instructor: "Marcus T.",
    duration: "6h 15m",
    lessons: 18,
    progress: 0,
    rating: 4.8,
    color: "from-sky-500/20 to-sky-900/20"
  },
  {
    id: 3,
    title: "Content Strategy for Creators",
    category: "Content",
    instructor: "Sarah J.",
    duration: "3h 45m",
    lessons: 8,
    progress: 100,
    rating: 5.0,
    color: "from-indigo-500/20 to-indigo-900/20"
  },
  {
    id: 4,
    title: "Monetizing Your Audience",
    category: "Business",
    instructor: "David L.",
    duration: "5h 20m",
    lessons: 14,
    progress: 12,
    rating: 4.7,
    color: "from-cyan-500/20 to-cyan-900/20"
  }
];

export default function FeaturedCourses() {
  return (
    <section className="py-24 relative" id="courses">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume <span className="text-primary">Learning</span></h2>
            <p className="text-muted-foreground text-lg">Pick up where you left off or discover new strategies to elevate your brand.</p>
          </motion.div>
          <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10">
            View All Courses <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#161B22] rounded-2xl border border-[rgba(96,165,250,0.12)] overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col group"
            >
              <div className={`h-40 bg-gradient-to-br ${course.color} relative p-4 flex flex-col justify-between`}>
                <div className="flex justify-between items-start">
                  <span className="bg-background/80 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full text-primary border border-primary/20">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-white border border-white/10">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    {course.rating}
                  </div>
                </div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay pointer-events-none"></div>
                <PlayCircle className="h-10 w-10 text-white/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 group-hover:text-white transition-all duration-300" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{course.title}</h3>
                
                <div className="flex items-center gap-2 mb-4 mt-auto">
                  <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-white border border-primary/20">
                    {course.instructor.charAt(0)}
                  </div>
                  <span className="text-sm text-muted-foreground">{course.instructor}</span>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5" />
                    {course.lessons} lessons
                  </div>
                </div>
                
                <div className="space-y-2 mt-auto">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-muted-foreground">{course.progress === 100 ? 'Completed' : course.progress === 0 ? 'Not started' : 'In progress'}</span>
                    <span className="text-white">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-1.5 bg-[#111827]" />
                </div>
                
                <Button className={`w-full mt-6 ${course.progress > 0 && course.progress < 100 ? 'bg-primary text-white hover:bg-primary/90' : 'bg-transparent border border-primary text-primary hover:bg-primary/10'}`}>
                  {course.progress === 100 ? 'Review Course' : course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}