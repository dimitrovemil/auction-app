import { Project } from "./project-item/Project";
import { useState, useEffect } from "react";
import * as projectService from '../../services/projectService';

export const ProjectList = () => {
    const [projects, setProjects] = useState({});

    useEffect(() => {
        projectService.getAll()
            .then(result => {
                setProjects(result);
            });
    }, []);

    return (
        <section className="projects-section bg-light" id="projects">

            <div className="container px-4 px-lg-5">

                {Object.values(projects)
                    .map((project, i) =>
                        <Project
                            key={project._id}
                            project={project}
                            index={i}
                        />
                    )}
            </div>
        </section>
    );
}