import { useState } from "react";


export const UserSignup = ({ onSignup }) => {

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

    let isSubmitBtnDisabled = (email === '' || fullName === '' || password === '' || confPassword === '') && password !== confPassword;

    let validateConfPassword = () => {
        if (password !== confPassword) {
            setPassMismach(true);
        } else {
            setPassMismach(false)
        }
    }

    //let isSubmitBtnDisabled = true;
    //useRef
    // useEffect(() => {
    //     if (email && fullName && password && confPassword) {
    //         isSubmitBtnDisabled = false;
    //     } else {
    //         isSubmitBtnDisabled = true;
    //     }
    // }, [email, fullName, password, confPassword]);

    // useEffect(() => {
    //     if (password !== confPassword) {
    //         setPassMismach(true)
    //     }
    // }, [confPassword]);

    const submitHandler = (e) => {
        e.preventDefault();

        let values = Object.fromEntries(new FormData(e.target));
        console.log(values);
        console.log(`${email} ${password}`);
        console.log('fullname', fullName);

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
                        <h2 className="text-white mb-5">Signup!</h2>

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