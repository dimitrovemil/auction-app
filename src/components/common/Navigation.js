import { useState } from "react";
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
                <a className="navbar-brand" href="#page-top">
                    The Art Auction House
                </a>
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
                            <a className="nav-link" href="#about" onClick={() => setAction('create')}>
                                Add new
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects" onClick={viewProjects}>
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#signup" onClick={signup}>
                                Signup
                            </a>
                        </li>
                    </ul>
                    {action == 'create' && <ProjectCreate onClose={closeHandler} onCreate={onProjectCreate}/>}
                </div>
            </div>
        </nav>
    );
}