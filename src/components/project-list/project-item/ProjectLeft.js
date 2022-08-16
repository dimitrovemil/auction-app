import {Link} from 'react-router-dom'

export const ProjectLeft = ({
    project,
}) => {

    return (
        <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    < div className="col-lg-6" >
                        <img
                            className="img-fluid"
                            src={project.imageUrl}
                            alt="..."
                        />
                    </div >
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">{project.title}</h4>
                                    <p className="mb-0 text-white-50">
                                        {project.description}
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 ms-0" />
                                    <h2 className="text-white-50 mx-auto mt-2 mb-5">

                                    </h2>
                                    {/* button with type "button" outside of a form will not reload the page;
                                    inside of a form by default it's type="submit", can skip it */}
                                    {/* <button type="submit" className="btn btn-primary" href="/#">type submit</button>
                                    <button type="button" className="btn btn-primary" href="/#">type btn</button> */}
                                    {/* <a className="btn btn-primary" href="/#"> Details </a> */}
                                    <Link className="btn btn-primary" to={`/projects/details/${project._id}`}> Details </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
    );
}