"use client";

import { IconType } from "react-icons";
import { useRef, useEffect } from "react";

interface LinkButtonProps {
  href: string;
  text: string;
  icon?: IconType;
  iconPosition?: "right" | "left";
  rounded?: boolean;
  isDownload?: boolean;
}

export default function LinkButton({
  href,
  text,
  icon: Icon,
  iconPosition = "right",
  rounded = false,
  isDownload = false,
}: LinkButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (ref.current && isDownload) {
      ref.current.setAttribute("download", "");
    }
  }, [isDownload]);

  return (
    <a
      ref={ref}
      href={href}
      {...(isDownload ? { download: true } : {})}
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-2.5
        font-semibold text-white text-sm tracking-wide
        bg-gradient-to-r from-cyan-400 to-blue-500
        hover:from-cyan-300 hover:to-blue-400
        transition-all duration-300
        hover:scale-[1.05] active:scale-[0.97]
        shadow-[0_0_20px_rgba(34,211,238,0.4)]
        hover:shadow-[0_0_28px_rgba(34,211,238,0.6)]
        ${rounded ? "rounded-full" : "rounded-lg"}
      `}
    >
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4" />}
      <span>{text}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4" />}
    </a>
  );
}