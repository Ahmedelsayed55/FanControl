import React, { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import { HiPlusSm } from "react-icons/hi";
import { TiMinus } from "react-icons/ti";
import tak from "./assets/Takief.png";
import ice from "./assets/ice.jpg";
import hott from "./assets/hot.jpg";
import hoticon from "./assets/hoticon.png";
import iceicon from "./assets/iceicon_.png";
export default function Takief() {
  const [hot, setHot] = useState(false);
  const [fanState, setFanState] = useState(false);
  const [fanSpeed, setFanSpeed] = useState(16);

  const increment = () => {
    if (fanState && fanSpeed >= 16 && fanSpeed < 30) {
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
    if (fanState && fanSpeed <= 30 && fanSpeed > 16) {
      let newSpeed = fanSpeed - 1;
      setFanSpeed(newSpeed);
      if (newSpeed >= 24) {
        setHot(true);
      } else {
        setHot(false);
      }
    }
  };

  const toggleFan = () => {
    setFanState(!fanState);

    if (fanState === true) {
      setFanSpeed(16);
      setHot(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: !hot ? `url(${ice})` : `url(${hott})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",
      }}
      className=" h-dvh flex flex-col items-center py-11 gap-10 transition-all duration-500"
    >
      <img
        src={tak}
        className={`shadow-2xl w-3/4 md:w-2/5 ${
          !hot ? "shadow-blue-600" : "shadow-red-600"
        } rounded-[3rem] transition-all duration-700`}
        alt=""
      />
      <div className="flex flex-col w-2xs border-2 gap-15 border-black shadow-2xl shadow-green-50 rounded-4xl px-10 py-5">
        <div className="flex flex-col gap-7 items-center justify-between">
            <h1 className="text-yellow-500 font-black text-3xl ">{hot ? <img className="w-10 transition-all duration-500" src={hoticon} alt="" /> : <img className="w-16 transition-all duration-500" src={iceicon} alt="" />}</h1>
          <div className="flex justify-between w-full ">
          <h1 className="text-yellow-500 font-black text-3xl">{fanSpeed}<span className="text-[1.5rem]">°C</span></h1>
            <h1 className={` font-black text-3xl ${!fanState ? "text-red-600 " : "text-yellow-500"} `}>{fanState ? "ON" : "OFF"}</h1>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <button onClick={increment} className="p-3 bg-amber-400 flex justify-center text-3xl rounded-3xl">
            <HiPlusSm /><span className="text-[1rem]">°C</span>
          </button>
          <button onClick={decrement} className="p-3 bg-amber-400 flex justify-center text-3xl rounded-3xl">
           <TiMinus /><span className="text-[1rem]">°C</span>
          </button>
        </div>
        <button onClick={toggleFan} className={`p-4 bg-amber-400 flex justify-center text-3xl rounded-4xl ${!fanState ? "bg-red-400 text-red-800" : "bg-amber-700 text-yellow-300"} transition  duration-300`}>
         <FaPowerOff />
        </button>
      </div>
    </div>
  );
}
