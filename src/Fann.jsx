import React from 'react'
import fan from './assets/Fan.png'
import { motion } from 'motion/react';
export default function Fann() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  return (
       <div className="flex flex-col items-center justify-center h-screen">
      <motion.img
        src={fan}
        alt=""
        className="w-40 h-40"
        animate={isAnimating ? { rotate: 360 } : { rotate: 0 }}
        transition={{
          duration: 0.5,
          ease: "linear",
          repeat: isAnimating ? Infinity : 0,
        }}
      />

      <button
        onClick={() => setIsAnimating(!isAnimating)}
        className="mt-6 bg-amber-400 px-5 py-2 rounded-xl"
      >
        {isAnimating ? "إيقاف" : "تشغيل"}
      </button>
    </div>
  )
}
