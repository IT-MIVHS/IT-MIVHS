import "./headerStyle.css";
import React from "react";

const Header = () => {
  return (
    <section>
      <header
        id="header"
        className="fixed left-0 top-2 sm:top-0 sm:right-0 sm:left-0 mx-auto text-white z-50 w-[26rem] sm:w-3/4"
      >
        <nav className="py-1 px-6 flex justify-between items-center flex-row rounded-3xl">
          <div id="bg"></div>
          <div id="logos" className="flex items-center gap-5 rounded-full">
            <img
              id="logoIt"
              src="teamItIcon.jpg"
              alt="Icon Team IT"
              className="rounded-full"
              width={30}
              height={30}
            />
            <h1 id="logo" className="text-2xl font-bold tracking-widest">
              <span>IT</span>
              <span>MIVHS</span>
            </h1>
          </div>
          <div id="toggle">
            <span></span>
            <span></span>
            <span></span>
            <input type="checkbox" name="" id="" />
          </div>
          <ul
            id="navigate"
            className="flex gap-8 justify-end font-medium text-sm flex-col md:flex-row"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="p-4 sm:p-0">
              <a
                id="signup"
                className="bg-pink-600 py-4 px-3 sm:py-1 sm:px-3 rounded-3xl"
                href="#regist"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;
