"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
    const experiences = [
        {
            title: "1337 School",
            period: "2023 - Present",
            description:
                "Intensive peer-to-peer learning program focused on software development, algorithms, and full-stack web development.",
            skills: ["C/C++", "Web Development", "Docker", "problem-solving"],
            type: "education",
        },
        {
            title: "Udemy - Full Stack Web Development Bootcamp",
            period: "2024 - 2025",
            description: "Comprehensive web development course covering modern technologies and best practices.",
            skills: ["React", "Node.js", "MongoDB", "API Development", "Authentication"],
            type: "course",
        },
    ]

    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Education & Experience
                        </span>
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="mb-8"
                            >
                                <Card className="bg-black/50 border-blue-500/20 backdrop-blur-xl text-left hover:border-blue-400/40 transition-all duration-300 overflow-hidden group">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 group-hover:from-blue-500/10 group-hover:to-blue-600/10 transition-all" />
                                        <CardHeader className="relative">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                                                        {exp.title}
                                                    </CardTitle>
                                                    <p className="text-blue-400 font-semibold">{exp.period}</p>
                                                </div>
                                                <Badge
                                                    variant="outline"
                                                    className={`border-blue-400/30 ${exp.type === "education" ? "text-blue-400" : "text-blue-300"
                                                        }`}
                                                >
                                                    {exp.type === "education" ? "Education" : "Course"}
                                                </Badge>
                                            </div>
                                            <CardDescription className="text-gray-300 mt-4">{exp.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="relative">
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill) => (
                                                    <Badge
                                                        key={skill}
                                                        variant="secondary"
                                                        className="bg-blue-500/20 text-blue-400 border-blue-400/30 hover:bg-blue-500/30 transition-colors"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
