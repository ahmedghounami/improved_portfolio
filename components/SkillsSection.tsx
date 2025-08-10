"use client"

import { motion } from "framer-motion"
import { Code, Server, Database, Globe } from "lucide-react"

export default function SkillsSection() {
    const skills = [
        {
            name: "React / Next.js",
            level: 95,
            icon: <Code className="w-5 h-5" />,
            color: "from-cyan-400 to-blue-500"
        },
        {
            name: "Node.js / Express / Fastify",
            level: 90,
            icon: <Server className="w-5 h-5" />,
            color: "from-green-400 to-emerald-600"
        },
        {
            name: "SQLite / MongoDB",
            level: 85,
            icon: <Database className="w-5 h-5" />,
            color: "from-orange-400 to-amber-600"
        },
        {
            name: "C / C++",
            level: 88,
            icon: <Code className="w-5 h-5" />,
            color: "from-pink-400 to-rose-600"
        },
        {
            name: "Docker",
            level: 80,
            icon: <Globe className="w-5 h-5" />,
            color: "from-purple-400 to-indigo-600"
        },
    ]

    return (
        <section id="skills" className="py-20 relative bg-gradient-to-b from-black via-[#0b0b12] to-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Skills & Expertise
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Technologies I work with to bring ideas to life — blending creativity and performance.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="mb-8 group"
                        >
                            <div className="bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.5)]">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg shadow-black/30`}
                                        >
                                            {skill.icon}
                                        </motion.div>
                                        <span className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                            {skill.name}
                                        </span>
                                    </div>
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.5 }}
                                        viewport={{ once: true }}
                                        className="font-bold text-lg bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                                    >
                                        {skill.level}%
                                    </motion.span>
                                </div>

                                <div className="relative w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className={`h-4 rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                                    >
                                        {/* Shimmer effect */}
                                        <motion.div
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "linear",
                                            }}
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
