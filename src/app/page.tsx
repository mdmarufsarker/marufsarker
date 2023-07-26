"use client";

import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import SocialMedia from "@/components/SocialMedia";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import TutorialsSection from "@/components/Tutorials/TutorialsSection";
import BlogsSection from "@/components/Blogs/BlogsSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <main className="font-body w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <SocialMedia />
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <TutorialsSection />
            <BlogsSection />
            <ContactSection />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
