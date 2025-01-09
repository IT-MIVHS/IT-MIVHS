/* eslint-disable react/react-in-jsx-scope */
import "./projectStyle.css";
import { projects } from "../../variables/projects.ts";
import strftime from "strftime";
import "react-slideshow-image/dist/styles.css";
import SliderGallery from "../sliderGallery/slidersGallery.jsx";
const Project = function () {
    return (
        <>
            <section
                id="project"
                className="h-screen flex translate-y-10 sm:translate-y-0 sm:items-center"
            >
                <div className="text-white relative">
                    <h1 className="text-pink-600 font-bold text-xl uppercase text-center observe">
                        Project
                    </h1>
                    <div className="project-list sm:grid sm:grid-cols-4 grid grid-cols-1 p-6 w-full gap-4 mt-4">
                        {projects.map((project, index) => {
                            const title = project.title;
                            const desc = project.desc;
                            const dateStart = project.dateStart;
                            const dateEnd = project.dateEnd;

                            return (
                                <>
                                    <div className="project bg-white/20 w-full h-full p-6 rounded-xl">
                                        <h1
                                            className={
                                                "title text-center font-semibold uppercase observe text-base " +
                                                (index % 4 >= 2 ? "observe-left" : "observe-right")
                                            }
                                        >
                                            {title}
                                        </h1>
                                        <p
                                            className={
                                                "desc text-justify observe text-sm " +
                                                (index % 4 >= 2 ? "observe-left" : "observe-right")
                                            }
                                        >
                                            {desc}
                                        </p>
                                        <div
                                            id="date"
                                            className={
                                                "flex flex-row gap-4 justify-between observe text-xs mt-4 " +
                                                (index % 4 >= 2 ? "observe-left" : "observe-right")
                                            }
                                        >
                                            <p className="dateStart">
                                                {strftime("%d/%m/%Y", dateStart)}
                                            </p>
                                            {dateEnd ? (
                                                <p className="dateEnd">
                                                    {strftime("%d/%m/%Y", dateEnd)}
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
            <SliderGallery />
        </>
    );
};

export default Project;
