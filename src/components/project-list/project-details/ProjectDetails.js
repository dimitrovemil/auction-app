import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as projectService from '../../../services/projectService';

export const ProjectDetails = () => {

    let { projectId } = useParams();

    let navigate = useNavigate();

    let [selectedProject, setSelectedProject] = useState({});

    useEffect(() => {
        projectService.getOne(projectId)
            .then(result => {
                setSelectedProject(result);
                console.log(result);
            });
    }, [projectId])



    return (
        <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            < div className="col-lg-6" >
                <img
                    className="img-fluid"
                    src={selectedProject.imageUrl}
                    alt="..."
                />
            </div >
            <div className="col-lg-6">
                <div className="bg-black text-center h-100 project">
                    <div className="d-flex h-100">
                        <div className="project-text w-100 my-auto text-center text-lg-left">
                            <h4 className="text-white">{selectedProject.title}</h4>
                            <p className="mb-0 text-white-50">
                                {selectedProject.author}
                            </p>
                            <hr className="d-none d-lg-block mb-0 ms-0" />

                            <h2 className="text-white-50 mx-auto mt-2 mb-5">
                                {selectedProject.description}
                            </h2>

                            <Link className="btn btn-primary-previous" to={`/projects/${projectId}/edit`} > Edit </Link>
                            <Link className="btn btn-primary-next" to={`/projects/${projectId}/delete`}> Delete </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}