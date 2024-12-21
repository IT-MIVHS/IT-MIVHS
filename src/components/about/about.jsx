import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./aboutStyle.css";
const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="relative h-screen flex items-center">
        <div className="-z-10 ring ring-indigo-900 bg-pink-800 rounded-full w-1/3 h-96 absolute right-0 bottom-48 blur-3xl opacity-20 scale-150"></div>
        <div className="-z-10 ring ring-indigo-900 bg-pink-800 rounded-full w-1/4 h-80 absolute left-48 bottom-96 blur-3xl opacity-20"></div>
        <div id="imageAbout"></div>
        <div className="text-white mx-10">
          <div id="title" className="text-center">
            <h1 className="text-2xl font-bold uppercase text-pink-600 observe">
              About
            </h1>
          </div>
          <div
            id="aboutContainer"
            className="text-center flex flex-col space-y-10 px-28"
          >
            <p className="observe text-sm">
              Kami adalah organisasi IT yang berdedikasi untuk mendorong inovasi
              di era digital. Dengan semangat kolaborasi, kami menyediakan wadah
              bagi individu berbakat untuk belajar, berbagi, dan menciptakan
              solusi teknologi yang berdampak positif bagi masyarakat
            </p>

            {/* Visi & Misi */}
            <div className="flex flex-col sm:flex-row gap-10 text-justify">
              <div id="visi" className="w-full pr-4">
                <h1 className="text-center text-lg font-bold text-pink-600 observe observe-right">
                  VISI
                </h1>
                <p className="observe observe-right text-sm">
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
                  <li className="observe observe-left text-sm">
                    Memberikan pelatihan dan pengembangan keterampilan IT yang
                    relevan dengan kebutuhan industri.
                  </li>
                  <li className="observe observe-left text-sm">
                    Membangun ekosistem kolaboratif yang mendukung pertumbuhan
                    dan inovasi teknologi.
                  </li>
                  <li className="observe observe-left text-sm">
                    Mengembangkan solusi teknologi yang memberikan dampak nyata
                    bagi masyarakat.
                  </li>
                </ol>
              </div>
            </div>
            {/* End Visi & Misi */}
          </div>
        </div>
      </section>
      {/* End About Section */}
    </>
  );
};

export default About;
