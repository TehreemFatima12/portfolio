"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },

    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
        },
      },

      color: {
        value: "#ffffff",
      },

      opacity: {
        value: {
          min: 0.2,
          max: 0.8,
        },
      },

      size: {
        value: {
          min: 1,
          max: 3,
        },
      },

      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
      },

      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
        },
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },

      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.3,
          },
        },
      },
    },

    detectRetina: true,
  };

  if (!init) return null;

  return (
    <Particles
      id="stars"
      options={options}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}