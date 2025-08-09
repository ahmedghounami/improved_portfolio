"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Let's Work Together
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        I'm always excited to work on new projects and collaborate with amazing people. Let's create something
                        extraordinary together!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <motion.a
                            href="mailto:ahmedghounami0@gmail.com"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 bg-black/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl px-6 py-4 hover:border-blue-400/40 transition-all group"
                        >
                            <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                            <span className="text-white group-hover:text-blue-400 transition-colors">ahmedghounami0@gmail.com</span>
                        </motion.a>

                        <motion.a
                            href="tel:+212620399298"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 bg-black/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl px-6 py-4 hover:border-blue-400/40 transition-all group"
                        >
                            <Phone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                            <span className="text-white group-hover:text-blue-400 transition-colors">+212 620399298</span>
                        </motion.a>
                    </div>

                    <div className="flex justify-center gap-6">
                        {[
                            { href: "https://github.com/ahmedghounami", icon: <Github className="w-6 h-6" />, label: "GitHub" },
                            {
                                href: "https://www.linkedin.com/in/ahmed-ghounami-a675b1294/",
                                icon: <Linkedin className="w-6 h-6" />,
                                label: "LinkedIn",
                            },
                        ].map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25 group"
                            >
                                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="text-white">
                                    {social.icon}
                                </motion.div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
