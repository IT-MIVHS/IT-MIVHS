/* eslint-disable react/react-in-jsx-scope */
import { projects } from "../../variables/projects.ts";
import strftime from "strftime";

const Project = function () {
    return (
        <section id="project">
            <div className="mx-auto max-w-7xl text-white">
                <h1 className="text-pink-600 font-bold text-xl uppercase text-center">Project</h1>
                <div className="project-list grid grid-cols-4 p-6 w-full grid-cols-3 gap-4">
                    {projects.map((project) => {
                        const title = project.title;
                        const desc = project.desc;
                        const dateStart = project.dateStart;
                        const dateEnd = project.dateEnd;

                        return (
                            <>
                                <div className="project bg-white/20 w-full h-full p-6 rounded-xl">
                                    <h1 className="title text-center font-semibold uppercase observe">
                                        {title}
                                    </h1>
                                    <p className="desc text-justify">{desc}</p>
                                    <div
                                        id="date"
                                        className="flex flex-row gap-4 justify-end observe"
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
    );
};

export default Project;
