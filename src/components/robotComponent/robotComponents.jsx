import React from "react";
import "./robotStyles.css";
import { Typewriter } from "react-simple-typewriter";
const RobotComponents = () => {
  return (
    <>
      <img src="material.jpg" className="opacity-20 -z-50 absolute" alt="" />
      <main id="robotsBody" className="relative flex flex-col items-center ">
        {/* Typewriter Section */}
        <div  className="text-center text-white text-2xl font-bold">
          <Typewriter
            words={["Eat", "Sleep", "Code", "Repeat!"]}
            loop={true} // Loop sebanyak 5 kali
            cursor
            cursorStyle="_"
            typeSpeed={100} // Kecepatan mengetik
            deleteSpeed={50} // Kecepatan menghapus
            delaySpeed={1000} // Waktu jeda sebelum mengetik ulang
          />
        </div>
        
        {/* Head Section */}
        <section id="headRobot" className="mb-4">
          <div className="border border-white/20 bg-indigo-700 w-32 h-20 rounded-3xl px-0 translate-y-3">
            <div
              id="containerEyes"
              className=" mx-auto border border-white flex items-center justify-between flex-row p-4 w-[6rem] h-3/4 translate-y-2.5 rounded-xl"
            >
              <div
                id="eyeLeft"
                className="bg-orange-300 w-6 h-8 rounded-lg"
              ></div>
              <div
                id="nose"
                className="absolute bg-orange-300 w-[3rem] h-2 rounded-xl -z-20"
              ></div>
              <div
                id="eyeRight"
                className="bg-orange-300 w-6 h-8 rounded-lg"
              ></div>
            </div>
          </div>
        </section>

        {/* Body Section */}
        <section
          id="bodyRobot"
          className="relative w-24 h-20 bg-indigo-700 border-2 border-white/20 rounded-b-[6rem] rounded-t-xl"
        >
          {/* Arms */}
          <div className=" bg-indigo-700 rounded-full absolute -left-[2rem] -top-1 w-8 h-16 border border-white/20 transform rotate-45 -z-10">
            <div className="bg-indigo-800 border border-white/20 w-full h-6 fixed bottom-0 rounded-full"></div>
          </div>
          <div className="bg-indigo-700 rounded-full absolute -right-[2rem] -top-1 w-8 h-16 border border-white/20 transform -rotate-45 -z-10">
            <div className="bg-indigo-800 border border-white/20 w-full h-6 fixed bottom-0 rounded-full"></div>
          </div>

          {/* Chest Detail */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-black/20 rounded-b-[4rem]"></div>
        </section>
        {/* Legs Section */}
        <section id="legsRobot" className="flex justify-between w-64 relative">
          {/* Left leg */}
          <div className="w-8 h-24 bg-indigo-700 border border-white/20 rounded-full rotate-12 absolute left-[5rem] -top-16 -z-10">
            <div className="bg-indigo-800 border border-white/20 w-full h-6 fixed bottom-0 rounded-full"></div>
          </div>
          {/* Right Leg */}
          <div className="w-8 h-24 bg-indigo-700 border border-white/20 rounded-b-full -rotate-12 absolute right-[5rem] -top-16 -z-10">
            <div className="bg-indigo-800 border border-white/20 w-full h-6 fixed bottom-0 rounded-full"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RobotComponents;
