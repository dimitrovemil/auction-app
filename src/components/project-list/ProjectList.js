import { Project } from "./project-item/Project";
import { useState, useEffect, useContext } from "react";

import * as projectService from '../../services/projectService';
import {ProjectContext} from "../../contexts/ProjectContext";

export const ProjectList = ({projects}) => {

    //const [projects, setProjects] = useState({});
    //const {projects, setProjects} = useContext(ProjectContext);
    
    // useEffect(() => {
    //     projectService.getAll()
    //         .then(result => {
    //             setProjects(result);
    //         });
    // }, []);

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