import React from "react";

import "./homeStyle.css";

const Home = function () {
    function join() {
        console.log("TEST");
    }

    return (
        <>
            <section id="home" className="h-screen flex items-center text-white">
                <div className="-z-10 ring ring-violet-700 bg-violet-700 rounded-full w-1/4 h-80 absolute -left-52 -top-36 blur-3xl opacity-50 "></div>
                <div className="-z-10 ring ring-indigo-900 bg-pink-800 rounded-full w-1/3 h-96 absolute -right-52 top-36 blur-3xl opacity-20 scale-150"></div>
                <div className="-z-10 ring ring-indigo-900 bg-indigo-900 rounded-full w-1/4 h-80 absolute left-96 bottom-0 blur-3xl opacity-50"></div>
                <div
                    id="container"
                    className="relative flex flex-col gap-4 justify-center h-fit py-6 px-32 w-2/3"
                >
                    <div id="material-bg">
                        <div
                            id="material-bg-image"
                            src="material.jpg"
                            className="-z-10 left-0 opacity-50"
                            alt="Example"
                        />
                    </div>
                    <p id="greetings" className="font-bold text-xl text-pink-400 w-fit">
                        Halo, Selamat Datang
                    </p>
                    <h1 id="title" className="font-bold w-full text-2xl">
                        Gabung Bersama Kami di Information and Technology!
                    </h1>
                    <p className="description text-justify w-4/5 text-l">
                        Kami mencari individu yang bersemangat, inovatif, dan memiliki keinginan
                        kuat untuk belajar dan berkontribusi dalam dunia IT. Bersama kita
                        menciptakan solusi teknologi untuk masa depan
                    </p>

                    <button
                        id="join"
                        className="self-start border-black px-6 py-2 rounded-xl mt-2 bg-violet-600 hover:bg-violet-900 hover:brightness-75 duration-100 text-sm font-bold"
                        onClick={join}
                    >
                        Daftar
                    </button>
                </div>
                <div>
                    <div id="image"></div>
                </div>
            </section>
        </>
    );
};

export default Home;
