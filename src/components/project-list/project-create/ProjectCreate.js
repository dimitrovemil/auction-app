import { useState, useContext } from 'react';
import styles from '../../../AppModal.module.css';
import {ProjectContext} from '../../../contexts/ProjectContext';

export const ProjectCreate = ({ onCreate, onClose }) => {
    //const [titleHasError, setTitleHasError] = useState('');

    const {setProjects, createProjectHandler} = useContext(ProjectContext);

    const [errors, setErrors] = useState({});

    const [formValues, setFormValues] = useState({
        title: '',
        author: '',
        imageUrl: '',
        description: '',
    });

    // When changing state always create a new reference- based on the old one
    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        onCreate(formValues);
        // createProjectHandler(formValues);
        // setProjects(state => ({...state, formValues}))
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

    const minLength = (e, bound) => {
        // if (formValues[e.target.name].length < bound) {
        //     setErrors(state => ({
        //         ...state,
        //         [e.target.name] : true
        //     }));
        // } 
        setErrors(state => ({
            ...state,
            [e.target.name]: formValues[e.target.name].length < bound
        }));
    }

    const isPositive = (e) => {
        let number = Number(e.target.value);

        setErrors(state => ({
            ...state,
            [e.target.name]: number < 0
        }))
    }

    const isFormValid = !Object.values(errors).some(x => x == true);

    return (
        <div className={`${styles['overlay']}`} >
            <div className={`${styles['backdrop']}`} onClick={onClose} ></div>
            <div className={`${styles['modal']}`}>
                <div className={`${styles['user-container']}`}>
                    <header className={`${styles['headers']}`}>
                        <h2>Add Project</h2>
                        <button className={`${styles['btn']} ${styles['close']}`} onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className={`${styles['svg-inline--fa']} ${styles['fa-xmark']}`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={submitHandler}>
                        <div className={`${styles['form-row']}`}>
                            <div className={`${styles['form-group']}`}>
                                <label htmlFor="title">Title</label>
                                <div className={`${styles['input-wrapper']}`}>
                                    <span><i className={`${styles['fa-solid fa-user']}`}></i></span>
                                    <input id='title' name="title" type="text"
                                        value={formValues.title}
                                        onChange={changeHandler}
                                        onBlur={(e) => minLength(e, 3)}
                                    />
                                </div>
                                {errors.title &&
                                    <p className={`${styles['form-error']}`}>
                                        Title should be at least 3 characters long!
                                    </p>
                                }
                            </div>
                            <div className={`${styles['form-group']}`}>
                                <label htmlFor="author">Author</label>
                                <div className={`${styles['input-wrapper']}`}>
                                    <span><i className={`${styles['fa-solid']} ${styles['fa-user']}`}></i></span>
                                    <input id='author' name="author" type="text"
                                        value={formValues.author}
                                        onChange={changeHandler}
                                    />
                                </div>
                                {/* <p className={`${styles['form-error']}`}>
                                    Last name should be at least 3 characters long!
                                </p> */}
                            </div>
                        </div>

                        <div className={`${styles['form-group']} ${styles['long-line']}`}>
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className={`${styles["input-wrapper"]}`}>
                                <span><i className={`${styles['fa-solid']} ${styles['fa-image']}`}></i></span>
                                <input id='imageUrl' name="imageUrl" type="text"
                                    value={formValues.imageUrl}
                                    onChange={changeHandler}
                                />
                            </div>
                            {/* <p className={`${styles['form-error']}`}>ImageUrl is not valid!</p> */}
                        </div>

                        <div className={`${styles['form-group']} ${styles['long-line']}`}>
                            <label htmlFor="description">Description</label>
                            <div className={`${styles["input-wrapper"]}`}>
                                <span><i className={`${styles['fa-solid']} ${styles['fa-user']}`}></i></span>
                                <input id='description' name='description' type="textarea"
                                    value={formValues.description}
                                    onChange={changeHandler}
                                />
                            </div>
                            {/* <p className={`${styles['form-error']}`}>Description is not valid!</p> */}
                        </div>

                        <div id={`${styles['form-actions']}`}>
                            <button id={`${styles['action-save']}`} className={`${styles["btn"]}`} type="submit"
                                // disabled={Object.values(errors).some(x => x == true)}
                                disabled={!isFormValid}
                            >
                                Save</button>
                            <button id={`${styles['action-cancel']}`} className={`${styles["btn"]}`} type="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}