import React, { useState } from "react";
import fan from "./assets/Fan.png";
import { motion } from "motion/react";
export default function Fann() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [fanSpeed, setFanSpeed] = useState(0);
  const increment = () => {
    if (isAnimating && fanSpeed >= 0 && fanSpeed < 3) {
      setFanSpeed(fanSpeed + 1);
    } else {
      setFanSpeed(0);
    }
  };
  const toggleAnimation = () => {
    if (isAnimating) {
      setIsAnimating(false);
      setFanSpeed(0);
    } else {
      setIsAnimating(true);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.img
        src={fan}
        alt=""
        className="w-2/12 "
        animate={{ rotate: isAnimating && fanSpeed >= 1 ? 360 * fanSpeed : 0  }}
        transition={{
          duration: fanSpeed === 3 ? 0.2 : fanSpeed === 2 ? 0.3 : 1,
          ease: "linear",
          repeat: isAnimating && fanSpeed >= 1 ? Infinity : 0,
        }}
      />
      <h1>
        {fanSpeed} {isAnimating ? "on" : "off"}
      </h1>
      <button
        className="mt-6 bg-amber-400 px-5 py-2 rounded-xl"
        onClick={increment}
      >
        Fan Speed
      </button>
      <button
        onClick={toggleAnimation}
        className="mt-6 bg-amber-400 px-5 py-2 rounded-xl"
      >
        {isAnimating ? "End" : "Start"}
      </button>
    </div>
  );
}
