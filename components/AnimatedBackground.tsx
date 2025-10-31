"use client";

import * as React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

/**
 * Reusable animated background:
 * - Radial spotlight
 * - Floating orbs (GPU-friendly transforms)
 * - Animated grid (very low opacity)
 * - Light sweeps for extra depth
 *
 * Props:
 *  - className: extra classes for wrapper
 *  - showGrid: toggle grid overlay
 *  - intensity: 0.5–1.5 (scales orb sizes/blur subtly)
 *  - palette: "blue" | "violet" (color theme)
 */
type AnimatedBackgroundProps = {
  className?: string;
  showGrid?: boolean;
  intensity?: number;
  palette?: "blue" | "violet";
};

const PALETTES = {
  blue: {
    orbA: "from-indigo-600/40 to-cyan-500/30",
    orbB: "from-cyan-400/30 to-sky-600/40",
    radial: "rgba(30,64,175,0.35)", // blue-800-ish
    grid: "rgba(59,130,246,0.15)",  // blue-500-ish
  },
  violet: {
    orbA: "from-violet-600/40 to-fuchsia-500/30",
    orbB: "from-fuchsia-400/30 to-purple-600/40",
    radial: "rgba(124,58,237,0.35)", // violet-600-ish
    grid: "rgba(168,85,247,0.15)",   // fuchsia-500-ish
  },
};

export default function AnimatedBackground({
  className,
  showGrid = true,
  intensity = 1,
  palette = "blue",
}: AnimatedBackgroundProps) {
  const colors = PALETTES[palette];
  const orbScale = Math.max(0.7, Math.min(1.5, intensity));

  return (
    <div
      className={clsx(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {/* Radial spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            `radial-gradient(ellipse at center, ${colors.radial} 0%, rgba(2,6,23,0.75) 45%, rgba(2,6,23,1) 100%)`,
        }}
      />

      {/* Floating orbs */}
      <motion.div
        aria-hidden
        className={clsx(
          "absolute -top-32 -left-32 blur-3xl rounded-full",
          "bg-gradient-to-br",
          colors.orbA
        )}
        style={{
          width: `${28 * orbScale}rem`,
          height: `${28 * orbScale}rem`,
        }}
        animate={{ y: [0, 14, -6, 0], x: [0, 10, -8, 0], rotate: [0, 8, -6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className={clsx(
          "absolute -bottom-32 -right-32 blur-3xl rounded-full",
          "bg-gradient-to-br",
          colors.orbB
        )}
        style={{
          width: `${30 * orbScale}rem`,
          height: `${30 * orbScale}rem`,
        }}
        animate={{ y: [0, -10, 8, 0], x: [0, -12, 6, 0], rotate: [0, -6, 6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated grid (super subtle) */}
      {showGrid && (
        <motion.div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          initial={{ backgroundPosition: "0px 0px" }}
          animate={{ backgroundPosition: ["0px 0px", "40px 20px", "0px 0px"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(to right, ${colors.grid} 1px, transparent 1px),
              linear-gradient(to bottom, ${colors.grid} 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      )}

      {/* Light sweep beams */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={{ opacity: 0.08 }}
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.08) 30%, transparent 60%)",
          maskImage:
            "radial-gradient(ellipse at 60% 40%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 75%)",
        }}
      />

      {/* Soft vertical gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
    </div>
  );
}
