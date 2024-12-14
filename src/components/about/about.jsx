import React from "react";

const About = () => {
    return (
        <>
            {/* About Section */}
            <section id="about">
                <div className="mx-auto max-w-7xl text-white">
                    <div id="title" className="mx-auto text-center">
                        <h1 className="text-2xl font-bold uppercase text-pink-600 observe">
                            About
                        </h1>
                    </div>
                    <div id="aboutContainer" className="m-4 text-center flex flex-col space-y-10">
                        <p className="observe">
                            Kami adalah organisasi IT yang berdedikasi untuk mendorong inovasi di
                            era digital. Dengan semangat kolaborasi, kami menyediakan wadah bagi
                            individu berbakat untuk belajar, berbagi, dan menciptakan solusi
                            teknologi yang berdampak positif bagi masyarakat
                        </p>

                        {/* Visi & Misi */}
                        <div className="flex flex-row p-4 gap-10 text-justify">
                            <div id="visi" className="w-full px-10">
                                <h1 className="text-center text-xl font-bold text-pink-600 observe">
                                    VISI
                                </h1>
                                <p className="observe">
                                    Menciptakan komunitas teknologi yang inovatif dan berkelanjutan,
                                    serta menjadi pelopor dalam pengembangan solusi berbasis
                                    teknologi informasi
                                </p>
                            </div>
                            <div id="misi" className="w-full px-10">
                                <h1 className="text-center text-xl font-bold text-pink-600 observe">
                                    MISI
                                </h1>
                                <ol className="list-decimal text-left">
                                    <li className="observe">
                                        Memberikan pelatihan dan pengembangan keterampilan IT yang
                                        relevan dengan kebutuhan industri.
                                    </li>
                                    <li className="observe">
                                        Membangun ekosistem kolaboratif yang mendukung pertumbuhan
                                        dan inovasi teknologi.
                                    </li>
                                    <li className="observe">
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
