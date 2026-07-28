"use client";

import Typewriter from "typewriter-effect";

export default function AnimatedIntro() {
  return (
    <div className="text-center">

    
      
      <div
        className="
          mt-4
          text-2xl
          sm:text-3xl
          md:text-4xl
          font-bold
          text-purple-400
          drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]
        "
      >
        <Typewriter
          options={{
            strings: [
              "Game UI Designer",
              "Game UX Designer",
              "Creative Game Designer",
              "Mobile Game UI Expert",
              "Game Interface Designer",
              "UI/UX Game Artist",
            ],
            autoStart: true,
            loop: true,
            delay: 30,
            deleteSpeed: 20,
          }}
        />
      </div>

    </div>
  );
}