import "./headerStyle.css";
import React from "react";

const Header = () => {
  return (
    <section>
      <header
        id="header"
        className="fixed left-0 right-0 top-0 sm:top-0 sm:right-0 sm:left-0 mx-auto text-white z-50 w-5/6 sm:w-3/4 h-10 sm:h-full"
      >
        <nav className="sm:py-2 sm:px-4 py-0 px-4 flex justify-between sm:items-center items-start flex-row rounded-3xl">
          <div id="bg"></div>
          <div id="logos" className="flex items-center gap-5 rounded-full">
            <img
              id="logoIt"
              src="teamItIcon.jpg"
              alt="Icon Team IT"
              className="rounded-full sm:w-8 sm:h-8 w-6 h-6"
            />
            <h1 id="logo" className="text-sm sm:text-2xl font-bold tracking-widest">
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
            className="flex gap-6 justify-end font-medium text-sm flex-col md:flex-row"
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
