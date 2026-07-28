"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TypingText from "./TypingText";
import SocialIcons from "./SocialIcons";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-xl px-6 lg:px-0 space-y-0 text-center lg:text-left"
    >
      {/* Greeting */}
      <p className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide text-violet-300">
        Hello, I'm
      </p>

      {/* Name */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-violet-200 to-fuchsia-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]">
        Khadijah Rao
      </h1>

      {/* Profession */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
        I'm a{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
          <TypingText />
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto max-w-xl text-base sm:text-lg leading-8 font-medium text-gray-300 lg:mx-0">
        Passionate Game Designer specializing in
        <span className="font-semibold text-white">
          {" "}Mobile Game Design
        </span>
        ,
        <span className="font-semibold text-white">
          {" "}UI/UX
        </span>
        , and
        <span className="font-semibold text-white">
          {" "}Interactive Digital Experiences
        </span>
        . I create visually engaging, user-friendly interfaces that combine
        creativity, functionality, and seamless user experiences.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center lg:justify-start pt-3">
        <SocialIcons />
      </div>

      {/* Button */}
      <div className="flex justify-center lg:justify-start pt-5">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full
          bg-gradient-to-r
          from-violet-600
          via-purple-600
          to-fuchsia-600
          px-7 py-2
          text-base font-semibold text-white
          shadow-[0_0_30px_rgba(168,85,247,0.35)]
          transition-all duration-300
          hover:-translate-y-0
          hover:shadow-[0_0_40px_rgba(168,85,247,0.55)]"
        >
          View Projects
        </Link>
      </div>
    </motion.div>
  );
}