"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
      min-h-[520px]
      rounded-3xl
      border border-violet-500/20
      bg-white/5
      backdrop-blur-xl
      p-7
      "
    >

      <h2 className="text-3xl font-bold text-white mb-3">
        Send Message 🚀
      </h2>


      <form className="space-y-4">

        <input
          type="text"
          placeholder="Name"
          className="
          w-full rounded-xl
          bg-black/20
          border border-white/10
          px-6 py-5
          text-white
          outline-none
          focus:border-violet-500
          "
        />


     

        <input
          type="text"
          placeholder="Subject"
          className="
          w-full rounded-xl
          bg-black/20
          border border-white/10
          px-5 py-5
          text-white
          outline-none
          focus:border-violet-500
          "
        />


        <textarea
          placeholder="Message"
          rows={4}
          className="
          w-full rounded-xl
          bg-black/20
          border border-white/10
          px-5 py-5
          text-white
          outline-none
          focus:border-violet-500
          "
        />


    <a
  
   href="mailto:haideraliagha006@gmail.com?subject=Portfolio Contact&body=Hello, I want to discuss a project with you."
  className="
  block
  w-full
  text-center
  rounded-xl
  bg-gradient-to-r
  from-violet-600
  to-purple-600
  py-5
  font-semibold
  text-white
  hover:scale-[1.02]
  transition-all
  duration-300
  "
>
  Send Message 🚀
</a>

      </form>

    </motion.div>
  );
}