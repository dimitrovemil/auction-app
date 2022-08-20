import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { ProjectContext } from '../../../contexts/ProjectContext';
import * as projectService from '../../../services/projectService';

export const ProjectEdit = () => {

    const [formValues, setFormValues] = useState({
        title: '',
        author: '',
        description: '',
        imageUrl: '',
    });
    
    const { projectEdit } = useContext(ProjectContext);
    const { projectId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        projectService.getOne(projectId)
            .then(projectData => {
                setFormValues(projectData);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();

        const projectData = Object.fromEntries(new FormData(e.target));

        projectService.edit(projectId, projectData)
            .then(result => {
                projectEdit(projectId, result);
                navigate(`/projects/details/${projectId}`)
            });
    };

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
  
    return (
        <section className="signup-section" id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">Edit project!</h2>

                        <form className="form-signup" id="contactForm"
                            onSubmit={submitHandler}>
                            <div className="row input-group-newsletter">
                                <div className="col row-signup">
                                    <input
                                        className="form-control" id="title" name="title" type="text"
                                        placeholder="Title..." aria-label="Title..."
                                        value={formValues.title}
                                        onChange={changeHandler}
                                    />
                                </div>
                            </div>
                            <div className="row input-group-newsletter">
                                <div className="col row-signup">
                                    <input
                                        className="form-control" id="author" name="author" type="text"
                                        placeholder="Author's name..." aria-label="Author's name..."
                                        value={formValues.author}
                                        onChange={changeHandler}
                                    />
                                </div>
                            </div>
                            <div className="row input-group-newsletter">
                                <div className="col row-signup">
                                    <input
                                        className="form-control" id="description" name="description" type="textarea"
                                        placeholder="Description..." aria-label="Description..."
                                        value={formValues.description}
                                        onChange={changeHandler}
                                    />
                                </div>
                            </div>
                            <div className="row input-group-newsletter">
                                <div className="col row-signup">
                                    <input
                                        className="form-control" id="imageUrl" name="imageUrl" type="text"
                                        placeholder="Image url..." aria-label="Image url..."
                                        value={formValues.imageUrl}
                                        onChange={changeHandler}
                                    />
                                </div>
                            </div>

                            <div className="col-auto row-signup">
                                <button className="btn btn-primary-previous" id="submitButton" type="submit"
                                > Edit
                                </button>
                                <Link className="btn btn-primary-next" to={`/projects/details/${projectId}`} > Cancel </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}