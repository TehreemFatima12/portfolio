"use client";

import { motion } from "framer-motion";
import Particles from "@/components/home/hero/Particles";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen pt-28 pb-0">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 0%, rgba(124,58,237,0.18), transparent 35%),
            radial-gradient(circle at 50% 0%, rgba(168,85,247,0.12), transparent 40%),
            linear-gradient(180deg, #13031f 0%, #090114 55%, #050010 100%)
          `,
        }}
      />

      {/* Left Glow */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[180px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-52 h-[650px] w-[650px] rounded-full bg-purple-600/10 blur-[220px]" />

      {/* Right Glow */}
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[180px]" />

      {/* Animated Particles */}
      <Particles />

      {/* Stars */}
      <div className="absolute inset-0 bg-[url('/images/stars.png')] bg-cover bg-center opacity-15 pointer-events-none" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-violet-400 uppercase tracking-[8px] font-semibold"
        >
          ABOUT ME
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-5xl md:text-7xl font-bold text-white"
        >
          My Design Approach
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-gray-400"
        >
          Creating immersive, intuitive, and visually engaging mobile game
          interfaces that combine creativity, usability, and memorable player
          experiences.
        </motion.p>
      </div>
    </section>
  );
}