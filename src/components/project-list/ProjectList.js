import { Project } from "./project-item/Project";

export const ProjectList = ({ projects }) => {

    return (
        <section className="projects-section bg-light" id="projects">

            <div className="container px-4 px-lg-5">
                {projects.length > 0
                    ? projects.map((project, i) =>
                        <Project
                            key={project._id}
                            project={project}
                            index={i}
                        />)
                    : <h3>No projects yet</h3>
                }

            </div>
        </section>
    );
}