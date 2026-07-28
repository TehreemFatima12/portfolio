"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-8 text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-violet-600/20 blur-[140px] rounded-full" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-semibold tracking-wider backdrop-blur-md"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
        CONTACT ME
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-5 text-5xl md:text-7xl font-bold text-white"
      >
        Let's Connect <span className="text-violet-500">⚡</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400"
      >
        Have a project in mind or want to collaborate?
        <br className="hidden md:block" />
        Let's create something amazing together with{" "}
        <span className="text-violet-400">
          creative ideas and modern experiences.
        </span>
      </motion.p>

      {/* Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ delay: 0.8 }}
        className="mx-auto mt-7 h-[3px] rounded-full bg-violet-500"
      />
    </section>
  );
}