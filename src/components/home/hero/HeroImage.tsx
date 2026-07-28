"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
     className="flex justify-center lg:justify-end lg:pr-4"
    >
      <div className="relative">
        {/* Soft Background Glow */}
        <div className="absolute inset-0 scale-125 rounded-full bg-violet-500/15 blur-3xl" />

        {/* Responsive Image Circle */}
        <div
          className="
            relative
            h-[220px] w-[220px]
            sm:h-[280px] sm:w-[280px]
            md:h-[330px] md:w-[330px]
            lg:h-[380px] lg:w-[380px]
            rounded-full
            bg-gradient-to-br
            from-cyan-400
            via-purple-500
            to-fuchsia-500
            p-[3px]
          "
        >
          <div className="relative h-full w-full overflow-hidden rounded-full bg-[#0B1220]">
            <Image
              src="/images/profile.png"
              alt="Profile"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 640px) 220px,
                (max-width: 768px) 280px,
                (max-width: 1024px) 330px,
                380px
              "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}