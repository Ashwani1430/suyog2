import { motion } from "motion/react";

export function Ambient3DBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Subtle Top-Center Executive Light Cone */}
      <div
        className="absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-35 blur-[130px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.45) 0%, rgba(6, 182, 212, 0.25) 45%, transparent 75%)",
        }}
      />

      {/* Floating Gentle Ambient Aura Left */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-24 h-[420px] w-[420px] rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(29, 78, 216, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 80%)",
        }}
      />

      {/* Floating Gentle Ambient Aura Right Behind Mockup */}
      <motion.div
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 -right-20 h-[480px] w-[480px] rounded-full opacity-30 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(6, 182, 212, 0.35) 0%, rgba(37, 99, 235, 0.25) 50%, transparent 80%)",
        }}
      />
    </div>
  );
}
