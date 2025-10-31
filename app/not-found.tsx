"use client"

import React from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "../components/ui/button"

export default function NotFound() {
  const router = useRouter()

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Radial spotlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.35)_0%,rgba(2,6,23,0.7)_45%,rgba(2,6,23,1)_100%)]" />

      {/* Animated grid backdrop */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: ["0px 0px", "40px 20px", "0px 0px"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-600/40 to-cyan-500/30 blur-3xl"
        animate={{ y: [0, 14, -6, 0], x: [0, 10, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400/30 to-sky-600/40 blur-3xl"
        animate={{ y: [0, -10, 8, 0], x: [0, -12, 6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)] p-8 sm:p-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* 404 Orb */}
            <div className="flex-shrink-0">
              <motion.div
                className="relative grid place-items-center h-48 w-48 sm:h-56 sm:w-56 rounded-2xl"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-700 via-sky-700 to-cyan-600 shadow-2xl" />
                <motion.div
                  className="absolute inset-[2px] rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10"
                  initial={{ opacity: 0.9 }}
                  animate={{ opacity: [0.9, 0.8, 0.9] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  initial={{ scale: 0.96 }}
                  animate={{ scale: [0.98, 1.02, 0.98] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 text-center"
                >
                  <span className="block text-6xl sm:text-7xl font-extrabold leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-cyan-200 drop-shadow">
                    404
                  </span>
                  <motion.span
                    className="mt-2 block h-px w-16 mx-auto bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    initial={{ opacity: 0.7, scaleX: 0.9 }}
                    animate={{ opacity: [0.6, 1, 0.6], scaleX: [0.9, 1.05, 0.9] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Copy + CTAs */}
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold tracking-tight text-white"
              >
                Oops — page not found
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.5 }}
                className="mt-2 text-slate-300 leading-relaxed"
              >
                The page you’re looking for may have been moved or deleted, or the link might be incorrect.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26, duration: 0.5 }}
                className="mt-6 flex flex-col sm:flex-row items-center gap-3"
              >
                {/* Primary: Back to home with shimmer */}
                <Button
                  onClick={() => router.push("/")}
                  className="relative overflow-hidden px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-br from-blue-700 to-cyan-700 border border-white/10 shadow-lg hover:shadow-blue-900/40 transition-colors"
                >
                  <span className="relative z-10">Back to Home</span>
                  <motion.span
                    aria-hidden
                    className="absolute inset-0"
                    initial={{ x: "-100%" }}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
                    }}
                  />
                </Button>

              </motion.div>
            </div>
          </div>

          {/* Decorative particles / shapes */}
          <div className="relative mt-8">
            <motion.span
              aria-hidden
              className="absolute -left-4 top-0 h-6 w-6 rounded-full bg-gradient-to-br from-pink-500 to-amber-300/90 blur-[2px] opacity-80"
              animate={{ x: [0, 16, -10, 0], y: [0, -8, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              aria-hidden
              className="absolute right-2 -bottom-2 h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500/90 blur-[2px] opacity-80"
              animate={{ x: [0, -18, 10, 0], y: [0, 6, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </main>
  )
}
