"use client"

import { motion } from "framer-motion"
import { Code, Server, Database, Globe, Smartphone, Wrench, GitBranch, Terminal, Cloud, Figma, Chrome, Cpu, Layers, Shield, Zap, BookOpen } from "lucide-react"

export default function SkillsSection() {
    // All skills, expertise, and tools in one array (tree)
    const allSkills = [
        // Frontend
        { name: "React", icon: <Code className="w-6 h-6" />, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", icon: <Code className="w-6 h-6" />, color: "from-gray-800 to-black" },
        { name: "JavaScript", icon: <Code className="w-6 h-6" />, color: "from-yellow-400 to-yellow-600" },
        { name: "TypeScript", icon: <Code className="w-6 h-6" />, color: "from-sky-400 to-blue-500" },
        { name: "HTML", icon: <Code className="w-6 h-6" />, color: "from-orange-400 to-red-500" },
        { name: "CSS", icon: <Code className="w-6 h-6" />, color: "from-blue-400 to-indigo-600" },
        { name: "Tailwind", icon: <Layers className="w-6 h-6" />, color: "from-cyan-400 to-blue-400" },
        { name: "React Native", icon: <Smartphone className="w-6 h-6" />, color: "from-blue-300 to-blue-500" },

        // Backend
        { name: "Node.js", icon: <Server className="w-6 h-6" />, color: "from-green-400 to-green-700" },
        { name: "Express", icon: <Wrench className="w-6 h-6" />, color: "from-gray-400 to-gray-600" },
        { name: "Fastify", icon: <Server className="w-6 h-6" />, color: "from-emerald-400 to-emerald-600" },
        { name: "REST APIs", icon: <Cloud className="w-6 h-6" />, color: "from-blue-400 to-cyan-600" },

        // Databases
        { name: "MongoDB", icon: <Database className="w-6 h-6" />, color: "from-green-400 to-green-700" },
        { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, color: "from-blue-500 to-blue-800" },
        { name: "MySQL", icon: <Database className="w-6 h-6" />, color: "from-yellow-500 to-orange-600" },
        { name: "SQLite", icon: <Database className="w-6 h-6" />, color: "from-gray-400 to-gray-600" },
        { name: "Firebase", icon: <Database className="w-6 h-6" />, color: "from-yellow-400 to-orange-500" },

        // DevOps & Tools
        { name: "Docker", icon: <Globe className="w-6 h-6" />, color: "from-blue-400 to-cyan-600" },
        { name: "Nginx", icon: <Server className="w-6 h-6" />, color: "from-green-500 to-green-800" },
        { name: "Git", icon: <GitBranch className="w-6 h-6" />, color: "from-gray-400 to-gray-700" },
        { name: "Linux", icon: <Terminal className="w-6 h-6" />, color: "from-gray-500 to-gray-900" },
        { name: "Figma", icon: <Figma className="w-6 h-6" />, color: "from-pink-400 to-orange-400" },

        // Other languages
        { name: "C", icon: <Cpu className="w-6 h-6" />, color: "from-blue-600 to-indigo-800" },
        { name: "C++", icon: <Cpu className="w-6 h-6" />, color: "from-violet-600 to-purple-800" },
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Skills & Expertise
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-base">A quick look at my core skills, areas of expertise, and favorite tools.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {allSkills.map((item, idx) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center w-22 p-1 pt-3 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow hover:shadow-blue-900/30 cursor-pointer transition-transform hover:scale-105"
                        >
                            <div className={`mb-1 p-2 rounded-lg bg-gradient-to-r ${item.color} shadow-md flex items-center justify-center`}>{item.icon}</div>
                            <span className="text-xs text-white/90 text-center font-semibold">{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
