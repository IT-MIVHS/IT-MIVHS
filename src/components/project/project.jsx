import { projects } from "../../variables/projects";

const project = function () {
    return (
        <section id="project">
            {projects.map((project) => {
                const title = project.title;
                const desc = project.desc;
                const dateStart = project.dateStart;
                const dateEnd = project.dateEnd;

                return (
                    <div className="project">
                        <h1 className="title">{title}</h1>
                        <p className="desc">{desc}</p>
                        <p className="dateStart">{dateStart}</p>
                        {dateEnd ? <p className="dateEnd">{dateEnd}</p> : ""}
                    </div>
                );
            })}
        </section>
    );
};

export default project;
