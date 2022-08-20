import { useState, useContext } from 'react';
import { ProjectContext } from '../../../contexts/ProjectContext';

import * as projectService from '../../../services/projectService';

export const ProjectCreate = () => {

    const [errors, setErrors] = useState({});

    const { projectAdd } = useContext(ProjectContext);

    const [formValues, setFormValues] = useState({
        title: '',
        author: '',
        description: '',
        imageUrl: '',
    });

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const projectData = Object.fromEntries(new FormData(e.target));

        projectService.create(projectData)
            .then(result => {
                projectAdd(result)
            });
    }

    // const validateTitle = (e) => {
    //     // console.log(formValues.title);
    //     // console.log(e.target.value);
    //     // console.log(e.target.name);
    //     if (formValues.title.length < 3) {
    //         setTitleHasError(true);
    //     } else {
    //         setTitleHasError(false);
    //     }
    // }

    // const minLength = (e, bound) => {
    //     // if (formValues[e.target.name].length < bound) {
    //     //     setErrors(state => ({
    //     //         ...state,
    //     //         [e.target.name] : true
    //     //     }));
    //     // } 
    //     setErrors(state => ({
    //         ...state,
    //         [e.target.name]: formValues[e.target.name].length < bound
    //     }));
    // }

    // const isPositive = (e) => {
    //     let number = Number(e.target.value);

    //     setErrors(state => ({
    //         ...state,
    //         [e.target.name]: number < 0
    //     }))
    // }

    // const isFormValid = !Object.values(errors).some(x => x == true);

    return (
        <section className="signup-section" id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">Add new!</h2>

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
                                <button className="btn btn-primary" id="submitButton" type="submit"
                                > Create!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );   
}