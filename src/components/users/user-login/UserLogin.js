import { useState } from "react";
import { Link } from 'react-router-dom';

export const UserLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    let isSubmitBtnDisabled = (email === '' || password === '');

    const submitHandler = (e) => {
        e.preventDefault();

        let values = Object.fromEntries(new FormData(e.target));
        console.log(values);
        console.log(`${email} ${password}`);
    }

    return (
        <section className="signup-section" id="signup">

            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">Login!</h2>
                        <h4 className="text-white">
                            Need a <Link to="/signup"> <ins>Registeration</ins> </Link>first to login!
                        </h4>

                        <form className="form-signup" id="contactForm"
                            onSubmit={submitHandler}>
                            <div className="row input-group-newsletter">
                                <div className="col row-signup">
                                    <input
                                        className="form-control" id="email" name="email" type="email"
                                        placeholder="Enter email address..." aria-label="Enter email address..."
                                        onChange={emailChangeHandler}
                                        value={email}
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

                            <div className="col-auto row-signup">
                                <button
                                    className="btn btn-primary" id="submitButton" type="submit"
                                    disabled={isSubmitBtnDisabled}
                                //onMouseEnter={validateConfPassword}
                                >Login!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}