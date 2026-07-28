"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingText() {
  return (
    <span className="text-cyan-400 font-bold">
      <Typewriter
             words={[
  "Game UI/UX Designer",
 
  "Creative UI Designer",
]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={1500}
      />
    </span>
  );
}