"use client";

import { motion } from "framer-motion";
import ProjectsList from "./ProjectsList";
const stats = [
  {
    number: "10+",
    title: "PROJECTS BUILT",
  },
  {
    number: "3M",
    title: "DOWNLOADS",
  },
  {
    number: "4.8 ",
    title: "AVG RATING",
  },
];

const categories = [
  "All",
  "GAME DESIGNING",
  "STORE LISTING",
];


export default function ProjectsSection() {
  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#050014]
      text-white
      flex
      items-start
      justify-center
      pt-[75px]
      pb-16
      "
    >

      {/* Purple Glow */}
      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top,#7e22ce,transparent_45%)]
        opacity-40
        "
      />


      {/* Floating Particles */}
      <div className="
        absolute 
        inset-0 
        overflow-hidden 
        pointer-events-none
      ">

        {[...Array(60)].map((_, i) => (
          <motion.span
            key={i}
            className="
            absolute
            rounded-full
            bg-purple-300
            shadow-[0_0_12px_#c084fc]
            "
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      </div>



      {/* Content */}
      <div
        className="
        relative
        z-20
        max-w-6xl
        mx-auto
        px-3
        text-center
        "
      >


        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
          mt-3
          text-5xl
          font-bold
          leading-tight
          bg-gradient-to-r
          from-purple-200
          via-purple-500
          to-fuchsia-600
          bg-clip-text
          text-transparent
          drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]
          "
        >
          My Projects
        </motion.h2>



        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
          mt-3
          text-lg
          md:text-2xl
          font-semibold
          text-gray-200
          max-w-3xl
          mx-auto
          "
        >
          Innovative applications & digital experiences
          built with creativity and precision.
        </motion.p>



        {/* Stats */}
            
        <div
          className="
          flex
          justify-center
          gap-12
          mt-3
          flex-wrap
          "
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <h3
                className="
                text-4xl
                font-bold
                text-purple-300
                "
              >
                {item.number}
              </h3>

              <p
                className="
                mt-2
                text-sm
                text-gray-300
                "
              >
                {item.title}
              </p>
            </motion.div>
          
          ))}

        </div>
            <ProjectsList />
      
         
        
 
      </div>
 
    </section>
   
  );
}