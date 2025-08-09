"use client"

import { motion } from "framer-motion"
import { Code, Server, Database } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
export default function AboutSection() {
    const features = [
        {
            icon: <Code className="w-8 h-8 text-blue-400" />,
            title: "Frontend Expert",
            description: "Creating beautiful, responsive user interfaces with React and Next.js",
            delay: 0.1,
        },
        {
            icon: <Server className="w-8 h-8 text-blue-500" />,
            title: "Backend Developer",
            description: "Building robust APIs and server architectures with Node.js and Fastify",
            delay: 0.2,
        },
        {
            icon: <Database className="w-8 h-8 text-blue-600" />,
            title: "Database Design",
            description: "Designing efficient database schemas with SQLite and MongoDB",
            delay: 0.3,
        },
    ]

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">About Me</span>
                    </motion.h2>

                    <div className="max-w-4xl mx-auto">
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-300 mb-12 leading-relaxed"
                        >
                            I'm a passionate full-stack developer currently studying at 1337 School, where I've embraced the
                            peer-to-peer learning methodology. My journey in software development is driven by curiosity and a desire
                            to create meaningful solutions that make a difference.
                        </motion.p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: item.delay }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="group"
                                >
                                    <Card className="bg-black/50 border-blue-500/20 backdrop-blur-xl hover:border-blue-400/40 transition-all duration-300 h-full">
                                        <CardHeader className="text-center">
                                            <motion.div
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                                className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full border border-blue-400/30"
                                            >
                                                {item.icon}
                                            </motion.div>
                                            <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                                                {item.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-300 text-center">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
