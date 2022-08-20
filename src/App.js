import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import * as projectService from './services/projectService';
import { AuthContext } from './contexts/AuthContext';
import { ProjectContext } from './contexts/ProjectContext';
import { useLocalStorage } from "./hooks/useLocalStorage";

import './App.css';
import { About } from './components/common/About';
import { Contact } from './components/common/Contact';
import { Footer } from './components/common/Footer';
import { Masthead } from './components/common/Masthead';
import { Navigation } from './components/common/Navigation';
import { ProjectList } from './components/project-list/ProjectList';
import { ProjectCreate } from './components/project-list/project-create/ProjectCreate'
import { ProjectDetails } from './components/project-list/project-details/ProjectDetails';
import { ProjectEdit } from './components/project-list/project-edit/ProjectEdit';

import { UserRegister } from './components/users/user-register/UserRegister';
import { UserLogin } from './components/users/user-login/UserLogin';
import { UserLogout } from './components/users/user-logout/UserLogout'
import { ProjectDelete } from './components/project-list/project-delete/ProjectDelete';

function App() {

    const navigate = useNavigate();

    const [projects, setProjects] = useState({});

    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    const projectAdd = (projectData) => {
        setProjects(state => [
            ...state,
            projectData,
        ]);

        navigate(`/projects/details/${projectData._id}`);
    };

    const projectEdit = (projectId, projectData) => {
        setProjects(state => state.map(x => x._id === projectId ? projectData : x));
    }

    const projectDelete = (projectId) => {
        setProjects(state => state.filter(x => x._id !== projectId));
    }

    useEffect(() => {
        projectService.getAll()
            .then(result => {
                setProjects(result);
            });
    }, []);

    // const closeHandler = () => {
    //     setCreate(null)
    // }

    // const showCreateHandler = () => {
    //     setCreate(true)
    // }

    // const createProjectHandler = (projectData) => {
    //     projectService.create(projectData)
    //     console.log(projectData);
    //     closeHandler();
    //     navigate('/projects');
    // }

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <div className="App">
                <>
                    {<Navigation />}

                    {/* {<Navigation showCreate={showCreateHandler} />} */}
                    {/* {create && <ProjectCreate onClose={closeHandler} onCreate={createProjectHandler} />} */}

                    <ProjectContext.Provider value={{ projects, projectAdd, projectEdit, projectDelete }}>
                        <Routes>
                            <Route path='/' element={<Masthead />} />
                            <Route path='/projects' element={<ProjectList projects={projects} />} />
                            <Route path='/projects/details/:projectId' element={<ProjectDetails />} />
                            <Route path='/create' element={<ProjectCreate />} />
                            <Route path="/projects/:projectId/edit" element={<ProjectEdit />} />
                            <Route path="/projects/:projectId/delete" element={<ProjectDelete />} />

                            <Route path='/register' element={<UserRegister />} />
                            <Route path='/login' element={<UserLogin />} />
                            <Route path='/logout' element={<UserLogout />} />

                            <Route path='/about' element={<About />} />
                            <Route path='/contacts' element={<Contact />} />
                            <Route path='*' element={<h1>Not found</h1>} />
                        </Routes>
                    </ProjectContext.Provider>

                    <Footer />

                </>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
