import { useState } from "react";
import {Link} from 'react-router-dom';


import { ProjectCreate } from "../project-list/project-create/ProjectCreate";




export const Navigation = ({viewProjects, signup}) => {

    const [action, setAction] = useState(null);

    const closeHandler = () => {
        setAction(null)
    }

    const onProjectCreate = (projectData) => {
        //call service create
        console.log(projectData);
        closeHandler();
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">
                    The Art Auction House
                </Link>
                {/* <a className="navbar-brand" href="#page-top">
                    The Art Auction House
                </a> */}
                <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    Menu
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="#" onClick={() => setAction('create')}>
                                Add new
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects" >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacts">
                                Contacts
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup" >
                                Signup
                            </Link>
                        </li>
                    </ul>
                    {action == 'create' && <ProjectCreate onClose={closeHandler} onCreate={onProjectCreate}/>}
                </div>
            </div>
        </nav>
    );
}