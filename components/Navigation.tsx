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
                <div className="flex justify-center items-center">
                    
                    <div className="hidden md:flex space-x-20">
                        {["about", "Skills", "Projects", "Experience", "Contact"].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative transition-colors hover:text-blue-400 ${activeSection === item.toLowerCase() ? "text-blue-400" : "text-gray-200"
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
