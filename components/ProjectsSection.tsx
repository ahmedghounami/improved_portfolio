"use client"

import { motion } from "framer-motion"
import { Code, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsSection() {
    const projects = [
        {
            title: "AIVITA",
            description:
                "AI-powered fitness and nutrition web app that generates personalized daily workout and meal plans based on user goals.",
            tech: ["Next.js", "TypeScript", "Fastify", "SQLite", "AI Integration"],
            status: "In Development",
            year: "2025",
            gradient: "from-blue-400 via-blue-500 to-blue-600",
        },
        {
            title: "ft_transcendence",
            description:
                "Full-stack web application with modern architecture, handling frontend, backend, and database management.",
            tech: ["Next.js", "Fastify", "SQLite3", "Tailwind CSS"],
            status: "Active",
            year: "2025",
            gradient: "from-blue-500 via-blue-600 to-blue-700",
        },
        {
            title: "WebServ",
            description: "HTTP server implementation from scratch in C++98. Advanced systems programming project.",
            tech: ["C++98", "HTTP Protocol", "Systems Programming"],
            status: "Completed",
            year: "2025",
            gradient: "from-blue-300 via-blue-400 to-blue-500",
        },
        {
            title: "Inception",
            description: "Containerization infrastructure setup using Docker for scalable application deployment.",
            tech: ["Docker", "DevOps", "Infrastructure"],
            status: "Completed",
            year: "2024",
            gradient: "from-blue-600 via-blue-700 to-blue-800",
        },
    ]

    return (
        <section id="projects" className="py-20 relative">
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
                            Featured Projects
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group"
                            >
                                <Card className="bg-black/50 border-blue-500/20 backdrop-blur-xl h-full hover:border-blue-400/40 transition-all duration-300 overflow-hidden">
                                    <div className="relative">
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                                        />
                                        <CardHeader className="relative">
                                            <div className="flex justify-between items-start mb-4">
                                                <motion.div
                                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                                    transition={{ duration: 0.6 }}
                                                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center shadow-lg`}
                                                >
                                                    <Code className="w-6 h-6 text-white" />
                                                </motion.div>
                                                <div className="text-right">
                                                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-400/30">
                                                        {project.year}
                                                    </Badge>
                                                    <p className="text-sm text-gray-400 mt-1">{project.status}</p>
                                                </div>
                                            </div>
                                            <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                                                {project.title}
                                            </CardTitle>
                                            <CardDescription className="text-gray-300">{project.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="relative">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tech.map((tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="outline"
                                                        className="border-blue-400/30 text-blue-400 hover:bg-blue-400/10 transition-colors"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                                            >
                                                <span className="text-sm">View Project</span>
                                                <ExternalLink className="w-4 h-4 ml-2" />
                                            </motion.div>
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
