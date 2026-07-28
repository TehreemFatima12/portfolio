"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { projects } from "./projectsData";
import GameDesign from "./GameDesign";
import StoreListing from "./StoreListing";

const categories = ["All", "GAME DESIGNING", "STORE LISTING"];

export default function ProjectsList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const showProjects = selectedCategory === "All";
  const showGameDesign = selectedCategory === "GAME DESIGNING";
  const showStoreListing = selectedCategory === "STORE LISTING";

  return (
    <div className="mt-4">
      {/* Category Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-7 py-2.5 rounded-full font-semibold transition-all ${
              selectedCategory === category
                ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-700 text-white"
                : "bg-white/5 border border-purple-500/30 text-gray-300"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* ALL */}
      {showProjects && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group w-full max-w-[450px] overflow-hidden rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-xl shadow-lg shadow-purple-900/20 hover:border-purple-400"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050014] via-transparent to-transparent" />
              </div>

              <div className="p-4">
                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30">
                  {project.category}
                </span>

                <h3 className="mt-3 text-lg font-bold text-purple-100">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-700 text-white text-sm"
                >
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* GAME DESIGNING */}
      {showGameDesign && <GameDesign />}

      {/* STORE LISTING */}
      {showStoreListing && <StoreListing />}
    </div>
  );
}