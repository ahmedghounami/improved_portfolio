"use client"

import { motion } from "framer-motion"

export default function Footer() {
    return (
        <footer className="py-8 border-t border-blue-500/20 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto px-6 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gray-400"
                >
                    © 2025 Ahmed Ghounami. Built with Next.js and passion for great code.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-500 text-sm mt-2"
                >
                    Speaking English, French, and Arabic
                </motion.p>
            </div>
        </footer>
    )
}
