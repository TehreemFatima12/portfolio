"use client";
import Particles from "@/components/home/hero/Particles";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <section className="relative overflow-hidden bg-[#050010] py-24">
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

     {/* Glow Effects */}
<div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[180px]" />
<div className="absolute left-1/2 -translate-x-1/2 -top-52 h-[650px] w-[650px] rounded-full bg-purple-600/10 blur-[220px]" />
<div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[180px]" />

{/* Particles */}
<Particles />

{/* Stars */}
<div className="absolute inset-0 bg-[url('/images/stars.png')] bg-cover bg-center opacity-15 pointer-events-none" />
      {/* ================= HERO ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-4 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-violet-400 uppercase tracking-[10px] font-semibold"
        >
          ABOUT ME
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-5xl md:text-7xl font-bold text-white"
        >
          My Design Approach
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-400"
        >
          Creating immersive, intuitive, and visually engaging mobile game
          interfaces that combine creativity, usability, and memorable player
          experiences.
        </motion.p>
      </div>

      {/* ================= CONTENT CARD ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            rounded-[30px]
            border border-violet-500/30
            bg-white/[0.04]
            backdrop-blur-xl
            shadow-[0_0_60px_rgba(168,85,247,.18)]
            p-8 md:p-12
          "
        >
          <div className="space-y-7">
            <p className="text-gray-300 leading-8 text-lg">
              Mobile Game UI Design is the art of creating interfaces that are
              both visually engaging and easy to use. A well-designed UI helps
              players navigate the game effortlessly while enhancing the overall
              gameplay experience.
            </p>

            <p className="text-gray-300 leading-8 text-lg">
              It includes designing every visual element players interact with,
              such as menus, HUDs, buttons, icons, inventory systems, shop
              screens, reward systems, settings, pop-ups, character screens,
              and other in-game interfaces. Beyond the game itself, UI design
              also covers app icons, store listing screenshots, and promotional
              visuals that create a strong first impression.
            </p>

            <p className="text-gray-300 leading-8 text-lg">
              Successful mobile game UI design combines creativity, usability,
              color theory, typography, visual hierarchy, and user-centered
              design principles. Every element is carefully crafted to match the
              game's style, improve clarity, and keep players engaged.
            </p>

            <p className="text-gray-300 leading-8 text-lg">
              Modern workflows also incorporate AI-powered tools to speed up
              research, concept generation, design exploration, and
              prototyping. Combined with Adobe Photoshop and Adobe Illustrator,
              designers can create polished, high-quality interfaces more
              efficiently while maintaining a unique visual identity.
            </p>

            <p className="text-gray-300 leading-8 text-lg">
              The goal of mobile game UI design is simple: to create intuitive,
              immersive, and memorable experiences that allow players to focus
              on enjoying the game.
            </p>

            <div className="border-t border-violet-500/20 pt-8">
              <h3 className="mb-5 text-2xl font-semibold text-white">
                Tools & Workflow
              </h3>

              <div className="flex flex-wrap gap-4">
                {[
                  "Adobe Photoshop",
                  "Adobe Illustrator",
                  "AI Workflow",
                  "UI / UX Design",
                  "Game Interface Design",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-2 text-violet-300 transition-all duration-300 hover:bg-violet-500/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}