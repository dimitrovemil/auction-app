import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as projectService from '../../../services/projectService';
import { AuthContext } from '../../../contexts/AuthContext';

export const ProjectDetails = ({ addBid }) => {
    const { user } = useContext(AuthContext);

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

    const placeBidHandler = (e) => {
        e.preventDefault();

        let currentPrice = Number(selectedProject.price);
        let resultPrice = currentPrice + Number(bid.bid);

        setSelectedProject(state => ({ ...state, price: resultPrice }));

        // if (Number(bid.bid) > currentPrice) {
        //     setSelectedProject(state => ({...state, price : bid.bid}))
        // }

        const result = `${bid.user}: ${bid.bid}`;

        addBid(projectId, result);
    }

    const [bid, setBid] = useState({
        bid: '',
        user: '',
    });

    const changeHandler = (e) => {
        setBid({
            bid: e.target.value,
            user: user.fullName
        });

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
                                {selectedProject.author}
                            </p>

                            <hr className="d-none d-lg-block mb-0 ms-0" />

                            <h2 className="text-white-50 mx-auto mt-2 mb-5">
                                {selectedProject.description}
                            </h2>

                            <h2 className="text-white-50 mx-auto mt-2 mb-5">
                                Price: {selectedProject.price}
                            </h2>

                            {user._id === selectedProject._ownerId
                                ? <>
                                    <Link className="btn btn-primary-previous" to={`/projects/${projectId}/edit`} > Edit </Link>
                                    <Link className="btn btn-primary-next" to={`/projects/${projectId}/delete`}> Delete </Link>
                                </>

                                // : <Link className="btn btn-primary-previous" to={`/projects`} > Back </Link>

                                : <section id="signup">
                                    <div className="container px-4 px-lg-5">
                                        <div className="row gx-4 gx-lg-5">
                                            <div className="col-md-10 col-lg-8 mx-auto text-center">
                                                <form className="form-signup" id="contactForm"
                                                    onSubmit={placeBidHandler}>
                                                    <div className="row input-group-newsletter">
                                                        <div className="col row-signup">
                                                            <input
                                                                className="form-control" id="bid" name="bid" type="number"
                                                                placeholder="Place your bid..." aria-label="Place your bid..."
                                                                //value={bid}
                                                                onChange={changeHandler}
                                                            />
                                                        </div>
                                                    </div>


                                                    <div className="col-auto row-signup">
                                                        <button className="btn btn-primary-previous" id="submitButton" type="submit"
                                                        > Place bid
                                                        </button>
                                                        <Link className="btn btn-primary-next" to="#" > Cancel </Link>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}