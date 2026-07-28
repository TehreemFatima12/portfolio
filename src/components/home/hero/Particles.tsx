"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

const hexToRgb = (hex: string): [number, number, number] => {
  hex = hex.replace("#", "");
  const int = parseInt(hex, 16);

  return [
    ((int >> 16) & 255) / 255,
    ((int >> 8) & 255) / 255,
    (int & 255) / 255,
  ];
};

const vertex = `
attribute vec3 position;
attribute vec4 random;
attribute vec3 color;

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;

uniform float uTime;
uniform float uSpread;
uniform float uBaseSize;

varying vec3 vColor;

void main() {

    vColor = color;

    vec3 pos = position * uSpread;

    pos.x += sin(uTime * random.x) * 0.15;
    pos.y += cos(uTime * random.y) * 0.15;
    pos.z += sin(uTime * random.z) * 0.15;

    vec4 mvPosition = viewMatrix * modelMatrix * vec4(pos,1.0);

    gl_PointSize = uBaseSize / length(mvPosition.xyz);

    gl_Position = projectionMatrix * mvPosition;
}
`;

const fragment = `
precision highp float;

varying vec3 vColor;

void main(){

    float d = distance(gl_PointCoord, vec2(.5));

    if(d>.5) discard;

    float alpha = smoothstep(.5,.15,d);

    gl_FragColor = vec4(vColor,alpha);

}
`;

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      alpha: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    });

    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    const camera = new Camera(gl, {
      fov: 15,
    });

    camera.position.z = 20;

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);

      camera.perspective({
        aspect: container.clientWidth / container.clientHeight,
      });
    };

    window.addEventListener("resize", resize);
    resize();

    const count = 700;

    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);

    const palette = [
      "#ffffff",
      "#c084fc",
      "#a855f7",
      "#f472b6",
    ];

    for (let i = 0; i < count; i++) {
      positions.set(
        [
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
        ],
        i * 3
      );

      randoms.set(
        [
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
        ],
        i * 4
      );

      const rgb =
        hexToRgb(
          palette[Math.floor(Math.random() * palette.length)]
        );

      colors.set(rgb, i * 3);
    }

    const geometry = new Geometry(gl, {
      position: {
        size: 3,
        data: positions,
      },

      random: {
        size: 4,
        data: randoms,
      },

      color: {
        size: 3,
        data: colors,
      },
    });

    const program = new Program(gl, {
      vertex,
      fragment,

      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: 7.5 },
        uBaseSize: { value: 70 },
      },

      transparent: true,
    });

    const mesh = new Mesh(gl, {
      geometry,
      program,
      mode: gl.POINTS,
    });

    let animationId = 0;
    let last = performance.now();
    let time = 0;

    const update = (t: number) => {
      animationId = requestAnimationFrame(update);

      time += (t - last) * 0.001;
      last = t;

      program.uniforms.uTime.value = time;

      renderer.render({
        scene: mesh,
        camera,
      });
    };

    animationId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);

      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}