

export const UserSignup = () => {

    return (
        <section className="signup-section" id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">Regiser!</h2>

                        <form className="form-signup" id="contactForm">
                            <div className="row input-group-newsletter">
                                <div className="col row-signup">
                                    <input className="form-control" id="emailAddress" type="email" placeholder="Enter email address..." aria-label="Enter email address..." />
                                </div>
                            </div>
                            <div className="row input-group-newsletter">
                                <div className="col row-signup">
                                    <input className="form-control" id="fullName" type="text" placeholder="Enter name..." aria-label="Enter name..." />
                                </div>
                            </div>
                            <div className="row input-group-newsletter">
                                <div className="col row-signup">
                                    <input className="form-control" id="password" type="password" placeholder="Enter password..." aria-label="Enter password..." />
                                </div>
                            </div>
                            <div className="row input-group-newsletter">
                                <div className="col row-signup">
                                    <input className="form-control" id="confirmPassword" type="password" placeholder="Confirm password..." aria-label="Confirm password..." />
                                </div>
                            </div>

                            <div className="col-auto row-signup">
                                <button className="btn btn-primary disabled" id="submitButton" type="submit">Register!</button>
                            </div>







                            <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email is required.</div>
                            <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is not valid.</div>
                            {/* Submit success message */}
                            {/*  */}
                            {/* This is what your users will see when the form */}
                            {/* has successfully submitted */}
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3 mt-2 text-white">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            {/* Submit error message */}
                            {/*  */}
                            {/* This is what your users will see when there is */}
                            {/* an error submitting the form */}
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}