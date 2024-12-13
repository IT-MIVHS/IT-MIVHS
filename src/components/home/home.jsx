import React from "react";
const Home = function () {
    return (
        <>
            <section id="home" className="h-screen flex items-center text-white mr-6">
                <div className="-z-10 ring ring-violet-700 bg-violet-700 rounded-full w-1/4 h-80 absolute -left-52 -top-36 blur-3xl opacity-50 "></div>
                <div className="-z-10 ring ring-indigo-900 bg-pink-800 rounded-full w-1/3 h-96 absolute -right-52 top-36 blur-3xl opacity-20 scale-150"></div>
                <div className="-z-10 ring ring-indigo-900 bg-indigo-900 rounded-full w-1/4 h-80 absolute left-48 bot-0 blur-3xl opacity-50"></div>
                <div
                    id="container"
                    className="relative flex flex-col gap-4 justify-center h-fit py-6 px-32 w-min"
                >
                    <img
                        src="material.jpg"
                        className="absolute w-full h-full -z-10 left-0 opacity-50"
                        alt="Example"
                    />
                    <p id="greetings" className="font-bold text-xl text-pink-400 w-fit">
                        Halo, Selamat Datang
                    </p>
                    <h1 id="title" className="font-bold w-80 text-xl">
                        Gabung Bersama Kami di Information and Technology!
                    </h1>
                    <p className="description text-justify w-96 text-sm">
                        Kami mencari individu yang bersemangat, inovatif, dan memiliki keinginan
                        kuat untuk belajar dan berkontribusi dalam dunia IT. Bersama kita
                        menciptakan solusi teknologi untuk masa depan
                    </p>

                    <button
                        id="join"
                        className="self-start border-black px-14 py-1.5 rounded-xl mt-2 bg-purple-600 hover:bg-purple-900 hover:brightness-75"
                    >
                        Gabung
                    </button>
                </div>
                <div className="h-full w-96 flex justify-center items-center">
                    <p className="border-2 border-black px-16 py-48">Image</p>
                </div>
            </section>
        </>
    );
};

export default Home;
