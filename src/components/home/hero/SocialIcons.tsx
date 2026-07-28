"use client";

import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/khadija-rao-07a049358?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    label: "LinkedIn",
  },
  {
    icon: <FaFacebookF />,
    href: "https://facebook.com/your-facebook",
    label: "Facebook",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/your-instagram",
    label: "Instagram",
  },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-5">
      {socialLinks.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#050010] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}