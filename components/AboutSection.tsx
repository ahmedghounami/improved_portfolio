"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

export default function ContactSection() {
    const contacts = [
        {
            icon: <Mail className="w-6 h-6 text-blue-400" />,
            title: "Email",
            value: "your@email.com",
            link: "mailto:your@email.com"
        },
        {
            icon: <Phone className="w-6 h-6 text-blue-400" />,
            title: "Phone",
            value: "+123 456 789",
            link: "tel:+123456789"
        },
        {
            icon: <MapPin className="w-6 h-6 text-blue-400" />,
            title: "Location",
            value: "Your City, Country",
            link: "https://maps.google.com"
        }
    ]

    return (
        <section id="contact" className="py-20 relative">
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
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Contact Me
                        </span>
                    </motion.h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {contacts.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }} // ✅ index now available
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card className="bg-black/50 border-blue-500/20 backdrop-blur-xl hover:border-blue-400/40 transition-all duration-300 h-full">
                                <CardHeader className="text-center">
                                    <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full border border-blue-400/30">
                                        {item.icon}
                                    </div>
                                    <CardTitle className="text-white text-xl">
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-blue-400 transition-colors"
                                    >
                                        {item.value}
                                    </a>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
