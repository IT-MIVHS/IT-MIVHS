import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./aboutStyle.css"
const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="relative">
        <div className="-z-10 ring ring-indigo-900 bg-pink-800 rounded-full w-1/3 h-96 absolute right-0 bottom-48 blur-3xl opacity-20 scale-150"></div>
        <div className="-z-10 ring ring-indigo-900 bg-pink-800 rounded-full w-1/4 h-80 absolute left-48 bottom-96 blur-3xl opacity-20"></div>
        <div className="mx-auto max-w-7xl text-white h-screen translate-y-1/4">
          <div id="title" className="mx-auto text-center">
            <h1 className="text-2xl font-bold uppercase text-pink-600 observe">
              About
            </h1>
          </div>
          <div
            id="aboutContainer"
            className="m-4 text-center flex flex-col space-y-10 px-28"
          >
            <p className="observe text-xs">
              Kami adalah organisasi IT yang berdedikasi untuk mendorong inovasi
              di era digital. Dengan semangat kolaborasi, kami menyediakan wadah
              bagi individu berbakat untuk belajar, berbagi, dan menciptakan
              solusi teknologi yang berdampak positif bagi masyarakat
            </p>

            {/* Visi & Misi */}
            <div className="flex flex-row gap-10 text-justify">
              <div id="visi" className="w-full pr-4">
                <h1 className="text-center text-lg font-bold text-pink-600 observe observe-right">
                  VISI
                </h1>
                <p className="observe observe-right text-xs">
                  Menciptakan komunitas teknologi yang inovatif dan
                  berkelanjutan, serta menjadi pelopor dalam pengembangan solusi
                  berbasis teknologi informasi
                </p>
              </div>
              <div id="misi" className="w-full pl-4">
                <h1 className="text-center text-lg font-bold text-pink-600 observe observe-left">
                  MISI
                </h1>
                <ol className="list-decimal text-left">
                  <li className="observe observe-left text-xs">
                    Memberikan pelatihan dan pengembangan keterampilan IT yang
                    relevan dengan kebutuhan industri.
                  </li>
                  <li className="observe observe-left text-xs">
                    Membangun ekosistem kolaboratif yang mendukung pertumbuhan
                    dan inovasi teknologi.
                  </li>
                  <li className="observe observe-left text-xs">
                    Mengembangkan solusi teknologi yang memberikan dampak nyata
                    bagi masyarakat.
                  </li>
                </ol>
              </div>
            </div>
            {/* End Visi & Misi */}
          </div>
        </div>

        {/* Robots Section */}
        <main
          id="aboutRobots"
          className="absolute top-0 left-6 flex flex-col items-center justify-center"
        >
          {/* Typewriter Section */}
          <div className="text-center text-white text-2xl font-bold">
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
          <section id="headRobot" className="mb-4 border-4 border-white bg-white/20 rounded-3xl z-50 py-2 px-2 translate-y-4 ">
            <div className="border border-white/20 bg-indigo-700 w-32 h-20 rounded-3xl px-0 shadow-md shadow-white ">
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
            className="relative w-24 h-20 bg-indigo-700 border-2 border-white/20 rounded-b-[6rem] rounded-t-xl shadow-md shadow-white"
          >
            {/* Arms */}
            <div className=" bg-indigo-700 rounded-full absolute -left-[2rem] -top-1 w-8 h-16 border border-white/20 transform rotate-45 -z-10 shadow-md shadow-white">
              <div className="bg-indigo-800 border border-white/20 w-full h-6 fixed bottom-0 rounded-full"></div>
            </div>
            <div className="bg-indigo-700 rounded-full absolute -right-[2rem] -top-1 w-8 h-16 border border-white/20 transform -rotate-45 -z-10 shadow-md shadow-white">
              <div className="bg-indigo-800 border border-white/20 w-full h-6 fixed bottom-0 rounded-full"></div>
            </div>

            {/* Chest Detail */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-black/20 rounded-b-[4rem]"></div>
          </section>
          {/* Legs Section */}
          <section
            id="legsRobot"
            className="flex justify-between w-64 relative"
          >
            {/* Left leg */}
            <div className="w-8 h-24 bg-indigo-700 border border-white/20 rounded-full rotate-12 absolute left-[5rem] -top-16 -z-10 shadow-md shadow-white">
              <div className="bg-indigo-800 border border-white/20 w-full h-6 fixed bottom-0 rounded-full"></div>
            </div>
            {/* Right Leg */}
            <div className="w-8 h-24 bg-indigo-700 border border-white/20 rounded-b-full -rotate-12 absolute right-[5rem] -top-16 -z-10 shadow-md shadow-white">
              <div className="bg-indigo-800 border border-white/20 w-full h-6 fixed bottom-0 rounded-full"></div>
            </div>
          </section>
        </main>
      </section>
      {/* End About Section */}

      <img
        src="material.jpg"
        className="opacity-20 -z-50 absolute h-1/2 w-full"
        alt=""
      />
      {/* End Robots Section */}
    </>
  );
};

export default About;
