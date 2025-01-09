import React from "react";
import { motion } from "framer-motion";
import "./galleryStyle.css";
const SliderGallery = () => {
    const upperSlider = [
        { img: "/sliders/slider_1.jpg" },
        { img: "/sliders/slider_2.jpg" },
        { img: "/sliders/slider_3.jpg" },
        { img: "/sliders/slider_4.jpg" },
    ];

    return (
        <div id="gallery" className="h-screen items-center flex ">
            <div
                id="sliderContainer"
                className="container mx-auto rounded-xl p-4 overflow-x-hidden MyGradient"
            >
                <div className="slide-container" id="gallery">
                    <h1 className="text-2xl font-bold uppercase text-pink-600 text-center">
                        Gallery
                    </h1>
                </div>
                <div className="flex gap-2 observe">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex flex-shrink-0 gap-1"
                    >
                        {[...upperSlider, ...upperSlider].map((slider, index) => (
                            <img
                                key={index}
                                src={slider.img}
                                alt={`slide-${index}`}
                                className="sm:p-4 sm:w-full sm:h-52 rounded-3xl p-4 h-64 w-64 aspect-auto object-cover"
                            />
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex flex-shrink-0 gap-1"
                    >
                        {[...upperSlider, ...upperSlider].map((slider, index) => (
                            <img
                                key={index}
                                src={slider.img}
                                alt={`slide-${index}`}
                                className="sm:p-4 sm:w-full sm:h-52 rounded-3xl p-4 h-64 w-64 aspect-auto object-cover"
                            />
                        ))}
                    </motion.div>
                </div>
                <div className="flex gap-2 observe">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex flex-shrink-0 gap-1"
                    >
                        {[...upperSlider, ...upperSlider].map((slider, index) => (
                            <img
                                key={index}
                                src={slider.img}
                                alt={`slide-${index}`}
                                className="sm:p-4 sm:w-full sm:h-52 rounded-3xl p-4 h-64 w-64 aspect-auto object-cover"
                            />
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex flex-shrink-0 gap-1"
                    >
                        {[...upperSlider, ...upperSlider].map((slider, index) => (
                            <img
                                key={index}
                                src={slider.img}
                                alt={`slide-${index}`}
                                className="sm:p-4 sm:w-full sm:h-52 rounded-3xl p-4 h-64 w-64 aspect-auto object-cover"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SliderGallery;
