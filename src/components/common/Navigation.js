import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
//import styles from './Navigation.module.css'
import * as projectService from '../../services/projectService';

import { ProjectCreate } from "../project-list/project-create/ProjectCreate";


export const Navigation = ({ showCreate }) => {

    const { user } = useContext(AuthContext);
    // const [action, setAction] = useState(null);

    // const closeHandler = () => {
    //     setAction(null)
    // }

    // const createProjectHandler = (projectData) => {
    //     projectService.create(projectData)
    //     console.log(projectData);
    //     closeHandler();
    // }

    // const setStyle = ({isActive}) => {
    //     return isActive
    //     ? styles['active-link']
    //     : undefined
    // }

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
                        {user.email
                            ? <li className="nav-item">
                                <Link className="nav-link" to="#" onClick={() => showCreate()}> Add new </Link>
                            </li>
                            : ''
                        }

                        <li className="nav-item">
                            <Link className="nav-link" to="/projects" >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/contacts"
                            >
                                Contacts
                            </Link>
                        </li>

                        <li className="nav-item">
                            {user.email
                                ? <Link className="nav-link" to="/logout" > Logout </Link>
                                : <Link className="nav-link" to="/login" > Login </Link>
                            }

                        </li>
                    </ul>

                    {/* {action == 'create' && <ProjectCreate onClose={closeHandler} onCreate={createProjectHandler} />} */}

                    {/* <li className="nav-item">
                            <NavLink
                                className="nav-link" 
                                to="/about"
                                style={(navLinkProps) => {
                                    return navLinkProps.isActive 
                                    ? {backgroundColor: 'blueviolet' }
                                    : {backgroundColor: undefined}
                                }}
                            >
                                About
                            </NavLink>
                        </li> */}
                    {/* <li className="nav-item">
                            <NavLink
                                className="nav-link" 
                                to="/contacts"
                                // style={({isActive}) => {
                                //     return isActive 
                                //     ? {backgroundColor: 'blueviolet' }
                                //     : {backgroundColor: undefined}
                                // }}

                                // style={({isActive}) => {
                                //     return {backgroundColor: isActive ? 'blueviolet' : undefined }
                                // }}

                                // className={({isActive}) => {
                                //     return {backgroundColor: isActive ? 'blueviolet' : undefined }
                                // }}

                                //className={setStyle}
                            >
                                Contacts
                            </NavLink>
                        </li> */}
                </div>
            </div>
        </nav>
    );
}