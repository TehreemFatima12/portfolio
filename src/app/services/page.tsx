"use client";

import { useState, useEffect, useRef } from "react";

/* ---------------- SERVICES ---------------- */

const services = [
 {
  icon: "code",
  title: "Game Theme Designer",
  desc: "Designing immersive game worlds, themes, environments, and visual styles that enhance storytelling and player experience.",
  tag: "Game Art · Theme Design",
  accent: "#a855f7",
  accentLight: "rgba(168,85,247,0.15)",
},
  {
  icon: "brush",
  title: "Game UI/UX Design",
  desc: "Immersive and interactive game interfaces designed for smooth gameplay experience, including HUDs, menus, and in-game UI systems.",
  tag: "Game UI · UX Design",
  accent: "#ec4899",
  accentLight: "rgba(236,72,153,0.15)",
},
  
  {
  icon: "monitor",
  title: "Branding & Post Production",
  desc: "End-to-end branding visuals , color grading, and high-quality marketing posts",
  tag: "Branding · Post Production",
  accent: "#8b5cf6",
  accentLight: "rgba(139,92,246,0.15)",
}
  
    
];

/* ---------------- ICONS ---------------- */

const ICON_PATHS: Record<string, string> = {
  code: "M8 6l-6 6 6 6M16 6l6 6-6 6",
  brush: "M3 21l9-9m-9 9h5m-5 0v-5M7.5 5.5l11 11",
  api: "M4 6h16M4 12h16M4 18h7",
  monitor: "M5 4h14v10H5zM9 20h6M12 14v6",
  server: "M5 3h14v6H5zM5 13h14v8H5z",
  zap: "M13 2L3 14h9l-1 8 10-12h-9z",
};

function Icon({ type }: { type: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
    >
      <path
        d={ICON_PATHS[type]}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------------- PARTICLES ---------------- */

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(168,85,247,0.9)";
        ctx.shadowBlur = 14;
        ctx.shadowColor = "#a855f7";

        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

/* ---------------- CARD ---------------- */

type CardProps = {
  service: {
    icon: string;
    title: string;
    desc: string;
    tag: string;
    accent: string;
    accentLight: string;
  };
  index: number;
  visible: boolean;
};

function Card({ service, index, visible }: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(16px)",
        borderRadius: 18,
        border: `1px solid ${
          hovered ? service.accent : "rgba(255,255,255,0.1)"
        }`,
        padding: "26px 28px",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.6s cubic-bezier(0.2,0.8,0.2,1)",
        transitionDelay: `${index * 120}ms`,
        boxShadow: hovered ? `0 0 35px ${service.accent}` : "none",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? `radial-gradient(circle at 30% 30%, ${service.accent}33, transparent 60%)`
            : "transparent",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: service.accentLight,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Icon type={service.icon} />
      </div>

      {/* Content */}
      <div
        style={{
          marginTop: 14,
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            color: "#fff",
            marginBottom: 8,
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          {service.title}
        </h2>

        <p
          style={{
            color: "#bbb",
            fontSize: 14,
            lineHeight: 1.6,
            marginBottom: 10,
          }}
        >
          {service.desc}
        </p>

        <span
          style={{
            color: service.accent,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {service.tag}
        </span>
      </div>
    </div>
  );
}

/* ---------------- PAGE ---------------- */

export default function ServicePage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top, #1a0033 0%, #0a001a 40%, #05000f 100%)",
      }}
    >
      {/* PARTICLES */}
      <Particles />

      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          top: -200,
          left: -200,
          width: 500,
          height: 500,
          background: "#a855f7",
          opacity: 0.2,
          filter: "blur(120px)",
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "120px 20px 80px",
        }}
      >
        {/* HEADING */}
        <h1
          style={{
            textAlign: "center",
            color: "#fff",
            textShadow: "0 0 25px #a855f7",
            fontWeight: 900,
            lineHeight: 1.1,
            fontSize: "64px",
          }}
        >
          My Services ⚡
        </h1>

        <span
          style={{
            fontWeight: 800,
            fontSize: "28px",
            display: "block",
            marginTop: "12px",
            color: "#c084fc",
            textAlign: "center",
          }}
        >
          What I build for you
        </span>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            maxWidth: 1200,
            margin: "60px auto 0",
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              service={service}
              index={index}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}