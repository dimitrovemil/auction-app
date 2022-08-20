import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useContext } from "react";

import * as authService from "../../../services/authService";
import { AuthContext } from "../../../contexts/AuthContext";

export const UserRegister = ({ onSignup }) => {

    // <input id='title' name="title" type="text"
    //                                     value={formValues.title}
    //                                     onChange={changeHandler}
    //                                 />
    // const [formValues, setFormValues] = useState({
    //     title: '',
    //     author: '',       
    //     imageUrl: '',       
    //     description: '',       
    // });

    // const changeHandler = (e) => {
    //     setFormValues(state => ({
    //         ...state,
    //         [e.target.name] : e.target.value
    //     }))
    // }

    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const [passMismatch, setPassMismach] = useState('');


    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const fullNameChangeHandler = (e) => {
        setFullName(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const confPasswordChangeHandler = (e) => {
        setConfPassword(e.target.value);
    }

    let isSubmitBtnDisabled = (email === '' || fullName === '' || password === '' || confPassword === '') && passMismatch;

    let validateConfPassword = () => {
        if (password !== confPassword) {
            setPassMismach(true);
        } else {
            setPassMismach(false)
        }
    }


    const submitHandler = (e) => {
        e.preventDefault();

        let {email, fullName, password, confPassword} = Object.fromEntries(new FormData(e.target));
        
        if (password !== confPassword) {
            return;
        }

        authService.register(email, password, fullName)
            .then(authData => {
                userLogin(authData);
                navigate('/login');
            });

        navigate('/login');
        //In uncontrolled form/comp
        // const formData = new FormData(e.currentTarget);
        // const email = formData.get('email');
        // const {email, fullName, password, confPassword} = Object.fromEntries(new FormData(e.currentTarget));

    }


    return (
        <section className="signup-section" id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">Register!</h2>

                        <form className="form-signup" id="contactForm"
                            onSubmit={submitHandler}>
                            <div className="row input-group-newsletter">
                                <div className="col row-signup">
                                    <input
                                        className="form-control" id="email" name="email" type="email"
                                        placeholder="Enter email address..." aria-label="Enter email address..."
                                        // onChange={(e) => setEmail(e.target.value)}
                                        onChange={emailChangeHandler}
                                        value={email}
                                    />
                                </div>
                            </div>
                            <div className="row input-group-newsletter">
                                <div className="col row-signup">
                                    <input
                                        className="form-control" id="fullName" name="fullName" type="text"
                                        placeholder="Enter name..." aria-label="Enter name..."
                                        onChange={fullNameChangeHandler}
                                        value={fullName}
                                    />
                                </div>
                            </div>
                            <div className="row input-group-newsletter">
                                <div className="col row-signup">
                                    <input
                                        className="form-control" id="password" name="password" type="password"
                                        placeholder="Enter password..." aria-label="Enter password..."
                                        onChange={passwordChangeHandler}
                                        value={password}
                                    />
                                </div>
                            </div>
                            <div className="row input-group-newsletter">
                                <div className="col row-signup">
                                    <input
                                        className="form-control" id="confPassword" name="confPassword" type="password"
                                        placeholder="Confirm password..." aria-label="Confirm password..."
                                        onChange={confPasswordChangeHandler}
                                        value={confPassword}
                                        //onMouseLeave={validateConfPassword}
                                        onBlur={validateConfPassword}
                                    />
                                </div>
                            </div>

                            {passMismatch &&
                                <div className="row-signup">
                                    <div className="text-center text-danger mb-3 mt-2">
                                        <div className="fw-bolder">Passwords do not match!</div>
                                    </div>
                                </div>
                            }

                            <div className="col-auto row-signup">
                                <button
                                    className="btn btn-primary" id="submitButton" type="submit"
                                    disabled={isSubmitBtnDisabled}
                                //onMouseEnter={validateConfPassword}
                                >Register!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}