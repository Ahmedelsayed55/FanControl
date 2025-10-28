import React, { useState } from "react";
import tak from "./assets/Takief.png";
import ice from './assets/ice.jpg'
import hott from './assets/hot.jpg'
export default function Takief() {
  const [hot, setHot] = useState(false);
  const [fanState, setFanState] = useState(false);
  const [fanSpeed, setFanSpeed] = useState(16);

   const increment = () => {
    if (fanSpeed >= 16 && fanSpeed < 30) {
      let newSpeed = fanSpeed + 1;
      setFanSpeed(newSpeed);
      if (newSpeed >= 24) {
        setHot(true);
      } else {
        setHot(false);
      }
    }
  };
   
  
  
  const decrement = () => {
    if (fanSpeed <= 30 && fanSpeed > 16) {
     
     let newSpeed = fanSpeed - 1;
      setFanSpeed(newSpeed);
      if (newSpeed >= 24) {
        setHot(true);
      } else {
        setHot(false);
      }
    }
  };



  return (
    <div style={{
    backgroundImage: !hot ? `url(${ice})` : `url(${hott})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className=' h-dvh flex flex-col items-center'>
      <img
        src={tak}
        className={`shadow-2xl w-1/2 ${!hot ? 'shadow-blue-600' : 'shadow-red-600'} rounded-2xl`}
        alt=""
      />
      <h1>{fanSpeed}</h1>
      <button onClick={increment} className="p-5 bg-amber-400 m-7"> ggg</button>
      <button onClick={decrement} className="p-5 bg-amber-400 m-7"> ffff</button>
    </div>
  );
}
