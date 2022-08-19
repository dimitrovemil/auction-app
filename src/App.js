import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ProjectContext from './contexts/ProjectContext';

import * as projectService from './services/projectService';

import './App.css';
import { About } from './components/common/About';
import { Contact } from './components/common/Contact';
import { Footer } from './components/common/Footer';
import { UserSignup } from './components/users/user-signup/UserSignup';
import { Masthead } from './components/common/Masthead';
import { Navigation } from './components/common/Navigation';
import { ProjectList } from './components/project-list/ProjectList';
import { ProjectDetails } from './components/project-list/project-details/ProjectDetails';
import { UserLogin } from './components/users/user-login/UserLogin';
import { ProjectCreate } from './components/project-list/project-create/ProjectCreate'

function App() {

    const navigate = useNavigate();

    const [create, setCreate] = useState(null);
    const [projects, setProjects] = useState({});

    const closeHandler = () => {
        setCreate(null)
    }

    const showCreateHandler = () => {
        setCreate(true)
    }

    const createProjectHandler = (projectData) => {
        projectService.create(projectData)
        console.log(projectData);
        closeHandler();
        navigate('/projects');
    }

    useEffect(() => {
        projectService.getAll()
            .then(result => {
                setProjects(result);
            });
    }, []);
    
    return (

        <div className="App">
            <>
                <ProjectContext.Provider value={{projects, setProjects, createProjectHandler}}>
                    {<Navigation showCreate={showCreateHandler} />}

                    {create && <ProjectCreate onClose={closeHandler} onCreate={createProjectHandler} />}

                    <Routes>
                        <Route path='/' element={<Masthead />} />
                        <Route path='/projects' element={<ProjectList />} />
                        <Route path='/projects/details/:projectId' element={<ProjectDetails />} />

                        <Route path='/about' element={<About />} />
                        <Route path='/contacts' element={<Contact />} />
                        <Route path='/signup' element={<UserSignup />} />
                        <Route path='/login' element={<UserLogin />} />
                        <Route path='*' element={<h1>Not found</h1>} />
                    </Routes>
                </ProjectContext.Provider>

                <Footer />
            </>

        </div>
    );
}

export default App;
