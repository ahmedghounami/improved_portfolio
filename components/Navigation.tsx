"use client"

import { motion } from "framer-motion"

interface NavigationProps {
    activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-blue-500/20"
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Ahmed Ghounami
                        </span>
                    </motion.div>
                    <div className="hidden md:flex space-x-8">
                        {["Skills", "Projects", "Experience", "Contact"].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative transition-colors hover:text-blue-400 ${activeSection === item.toLowerCase() ? "text-blue-400" : "text-gray-300"
                                    }`}
                            >
                                {item}
                                {activeSection === item.toLowerCase() && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}
