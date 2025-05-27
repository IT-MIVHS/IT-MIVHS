import "./headerStyle.css";
import React from "react";

const Header = () => {
    return (
        <section>
            <header
                id="header"
                className="fixed -translate-x-1/2 left-1/2 right-0 top-0 sm:top-0 sm:right-0  text-white z-50 w-5/6 sm:w-3/4 h-10 sm:h-full"
            >
                <nav
                    id="navigation"
                    className="h-20 sm:py-4 sm:px-8 py-0 px-4 flex justify-between sm:items-center flex-row rounded-3xl"
                >
                    <div id="bg"></div>
                    <div id="logos" className="relative h-full flex items-center gap-5 rounded-full">
                        <img
                            id="logoIt"
                            src="teamit_logo.png"
                            alt="Icon Team IT"
                            className="rounded-full sm:w-8 sm:h-8 w-6 h-6"
                        />
                        <h1 id="logo" className="text-sm sm:text-2xl font-thin tracking-widest">
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
                        className="relative flex flex-row gap-6 justify-end items-center font-thin text-sm h-full m-0"
                    >
                        <div>
                            <a href="#">Home</a>
                        </div>
                        <div>
                            <a href="#about">About</a>
                        </div>
                        <div>
                            <a href="#project">Project</a>
                        </div>
                        <div>
                            <a href="#gallery">Gallery</a>
                        </div>
                        <div>
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="p-4 sm:p-0">
                            <a
                                id="signup"
                                className="bg-pink-600 py-4 px-3 sm:py-1 sm:px-3 rounded-3xl"
                                href="#regist"
                            >
                                Sign Up
                            </a>
                        </div>
                    </ul>
                </nav>
            </header>
        </section>
    );
};

export default Header;
