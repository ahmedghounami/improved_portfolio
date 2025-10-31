"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, useScroll } from "framer-motion"

import Navigation from "../components/Navigation"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import ExperienceSection from "../components/ExperienceSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import AnimatedBackground from "./AnimatedBackground"

const SECTION_IDS = ["hero", "about", "skills", "projects", "experience", "contact"] as const
type SectionId = (typeof SECTION_IDS)[number]

export default function PortfolioClient() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero")
  const { scrollYProgress } = useScroll()

  // Create observers once
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const options: IntersectionObserverInit = { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0.2 }

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(id)
        })
      }, options)
      io.observe(el)
      observers.push(io)
    })

    return () => observers.forEach((io) => io.disconnect())
  }, [])

  // Smooth progress bar scale
  const progressScaleX = useMemo(
    () => scrollYProgress, // you can pass through a transform if you want easing
    [scrollYProgress]
  )

  return (
    <div className="relative min-h-screen  text-white overflow-x-hidden">
      {/* 🔥 Single reusable animated background (behind everything) */}
<AnimatedBackground intensity={0.85} />


      {/* Top progress bar */}
      <motion.div
        className="fixed left-0 top-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 origin-left z-40"
        style={{ scaleX: progressScaleX }}
      />

      {/* Your navigation (reads activeSection) */}
      <Navigation activeSection={activeSection} />

      {/* Content sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />

      <Footer />
    </div>
  )
}
