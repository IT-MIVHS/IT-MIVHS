import { projects } from "../../variables/projects.ts";
import strftime from "strftime";

const Project = function () {
    return (
        <section id="project">
            <div className="mx-auto max-w-7xl text-white">
                <h1>Project</h1>
                <div className="project-list">
                    {projects.map((project) => {
                        const title = project.title;
                        const desc = project.desc;
                        const dateStart = project.dateStart;
                        const dateEnd = project.dateEnd;

                        return (
                            <div className="project">
                                <h1 className="title">{title}</h1>
                                <p className="desc">{desc}</p>
                                <p className="dateStart">{strftime("%d/%m/%Y", dateStart)}</p>
                                {dateEnd ? (
                                    <p className="dateEnd">{strftime("%d/%m/%Y", dateEnd)}</p>
                                ) : (
                                    ""
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Project;
