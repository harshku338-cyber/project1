import { useEffect } from "react";
import Navbar from "@/components/learning/Navbar";
import Hero from "@/components/learning/Hero";
import FeaturedCourses from "@/components/learning/FeaturedCourses";
import LearningPaths from "@/components/learning/LearningPaths";
import ProgressDashboard from "@/components/learning/ProgressDashboard";
import ResourceCenter from "@/components/learning/ResourceCenter";
import AIAssistant from "@/components/learning/AIAssistant";
import Certifications from "@/components/learning/Certifications";
import CTASection from "@/components/learning/CTASection";
import Footer from "@/components/learning/Footer";
import FloatingChatbot from "@/components/learning/FloatingChatbot";

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedCourses />
        <LearningPaths />
        <ProgressDashboard />
        <ResourceCenter />
        <AIAssistant />
        <Certifications />
        <CTASection />
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}