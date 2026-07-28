"use client";

import { motion } from "framer-motion";

import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import {
  Mail,
  MessageCircle,
} from "lucide-react";


const contacts = [

  {
    icon: <FaLinkedin size={22} />,
    title: "LinkedIn",
    value: "linkedin.com/in/khadija-rao",
    link: "https://www.linkedin.com/in/khadija-rao-07a049358",
    color: "text-cyan-400",
  },

    {
    icon: <Mail size={26} />,
    title: "Email",
    value: "your@email.com",
    link: "mailto:your@email.com",
    color: "text-yellow-300",
  },
    {
    icon: <FaInstagram size={26} />,
    title: "Instagram",
    value: "@your_instagram",
    link: "https://instagram.com/yourusername",
    color: "text-pink-400",
  },
 
  {
    icon: <FaFacebook size={26} />,
    title: "Facebook",
    value: "facebook.com/yourprofile",
    link: "https://facebook.com/yourprofile",
    color: "text-blue-400",
  },
 
  {
    icon: <MessageCircle size={26} />,
    title: "WhatsApp",
    value: "+92 XXX XXXXXXX",
    link: "https://wa.me/92XXXXXXXXXX",
    color: "text-green-400",
  },
];


export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="space-y-5"
    >
      {contacts.map((item) => (
        <a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
          group flex items-center gap-5
          rounded-2xl
          border border-violet-500/20
          bg-white/5
          p-5
          backdrop-blur-xl
          transition-all duration-300
          hover:border-violet-500
          hover:bg-violet-500/10
          "
        >

          <div
            className={`
            flex h-12 w-12 items-center justify-center
            rounded-full
            bg-white/10
            ${item.color}
            `}
          >
            {item.icon}
          </div>


          <div>
            <h3 className="text-lg font-semibold text-white">
              {item.title}
            </h3>

            <p className="text-sm text-gray-400 group-hover:text-violet-300 transition">
              {item.value}
            </p>
          </div>

        </a>
      ))}
    </motion.div>
  );
}