"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { icons, screenshots } from "./projectsData";

export default function StoreListing() {
      const sliderIcons = [...icons, ...icons, ...icons];
  return (
<section className="relative overflow-hidden py-10">      {/* Background Glow */}
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
  {[...Array(180)].map((_, i) => (
    <motion.span
      key={i}
      className="absolute rounded-full"
      style={{
        width: Math.random() * 2 + 1,
        height: Math.random() * 2 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        background:
          i % 5 === 0
            ? "#fff"
            : i % 3 === 0
            ? "#d8b4fe"
            : "#a855f7",
        boxShadow:
          i % 5 === 0
            ? "0 0 10px rgba(255,255,255,.9)"
            : "0 0 8px rgba(168,85,247,.8)",
      }}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [1, 1.8, 1],
      }}
      transition={{
        duration: Math.random() * 4 + 2,
        repeat: Infinity,
        delay: Math.random() * 6,
      }}
    />
  ))}
</div>

      {/* ========================= */}
      {/* Store Icons Slider */}
 <Swiper
  modules={[Autoplay]}
  slidesPerView="auto"
  spaceBetween={12}
  speed={1500}
  loop={icons.length > 8}
  autoplay={{
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  className="mb-8"
>

{sliderIcons.map((icon, index) => (
    <SwiperSlide
      key={index}
      className="!w-[78px] sm:!w-[92px] md:!w-[106px]"
    >
      <motion.div
        whileHover={{
          y: -3,
          scale: 1.05,
        }}
        transition={{ duration: 0.3 }}
        className="flex justify-center"
      >
       <div
  className="
    group
    w-[70px]
    h-[70px]
    sm:w-[85px]
    sm:h-[85px]
    md:w-[100px]
    md:h-[100px]
    rounded-2xl
    overflow-hidden
    border
    border-purple-500/30
  
    backdrop-blur-xl
    p-1
  "
>
  <Image
    src={icon}
    alt={`Store Icon ${index + 1}`}
    width={100}
    height={100}
    className="w-full h-full object-cover rounded-xl"
  />
</div>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>


{/* ========================= */}
{/* Store Screenshots */}
{/* ========================= */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
  {screenshots.map((image, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="group rounded-3xl overflow-hidden border border-purple-500/30 bg-transparent shadow-xl shadow-purple-900/20 hover:border-purple-400 transition-all duration-300">
    <div className="p-2 sm:p-3">
        <div className="relative w-full h-[230px] sm:h-[220px] md:h-[260px] overflow-hidden rounded-2xl">
    <Image
      src={image}
      alt={`Screenshot ${index + 1}`}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
     className="
  object-contain
   
  transition-transform
  duration-500
  group-hover:scale-105
"
    />
  </div>
</div>

       
      
    </motion.div>
  ))}
</div>

{/* Bottom Glow */}
<div className="pointer-events-none absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

</section>
  );
}
