import { ProjectLeft } from "./project-item/ProjectLeft";
import { ProjectRight } from "./project-item/ProjectRight";

export const ProjectList = ({projects}) => {

    return (
        <section className="projects-section bg-light" id="projects">

            <div className="container px-4 px-lg-5">
               
                {projects.map((project, i) =>
                    i % 2 == 0
                        ? <ProjectLeft
                            key={project._id}
                            project={project}
                        />
                        : <ProjectRight
                            key={project._id}
                            project={project}
                        />
                )}
            </div>
        </section>
    );
}