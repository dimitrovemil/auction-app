import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as projectService from '../../../services/projectService';

export const ProjectDetails = () => {

    let { projectId } = useParams();
    let navigate = useNavigate();

    let [selectedProject, setSelectedProject] = useState({});
   
    // useEffect(() => {
    //     projectService.getOne(projectId)
    //         .then(result => {
    //             console.log(result);
    //             setSelectedProject(result);
    //             console.log(selectedProject);
    //         })
    //         .catch(navigate('/not-found'));;
    // }, [projectId]);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/projects/${projectId}`)
        .then(res => res.json())
        .then(result => setSelectedProject(result))
    }, [projectId])


    const nextProjectHandler = () => {
        // TODO: Add validation for end of list
        // navigate(`/projects/details/${Number(projectId) + 1}`, {replace: true})
        navigate(`/projects/details/${Number(projectId) + 1}`);
    }

    const previousProjectHandler = () => {
        navigate(`/projects/details/${Number(projectId) - 1}`);
    }

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
                                {selectedProject.description}
                            </p>
                            <hr className="d-none d-lg-block mb-0 ms-0" />
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">

                            </h2>
                            {/* button with type "button" outside of a form will not reload the page;
                                    inside of a form by default it's type="submit", can skip it */}
                            {/* <button type="submit" className="btn btn-primary" href="/#">type submit</button>
                                    <button type="button" className="btn btn-primary" href="/#">type btn</button> */}
                            {/* <a className="btn btn-primary" href="/#"> Details </a> */}
                            <a className="btn btn-primary-previous" onClick={previousProjectHandler} > Previous </a>
                            <a className="btn btn-primary-next" onClick={nextProjectHandler}> Next </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}