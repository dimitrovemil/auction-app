import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {     
        projectService.getAll()
            .then(result => {
                setProjects(result);
            });
    }, []);

    return (
        <div className="App">
            <>
                {<Navigation />}

                <Routes>
                    <Route path='/' element={<Masthead />} />
                    <Route path='/projects' element={<ProjectList projects={projects} />} />
                    <Route path='/projects/details/:projectId' element={<ProjectDetails />} />
                    
                    <Route path='/about' element={<About />} />
                    <Route path='/contacts' element={<Contact />} />
                    <Route path='/signup' element={<UserSignup />} />
                    <Route path='/login' element={<UserLogin />} />
                    <Route path='*' element={<h1>Not found</h1>} />
                </Routes>

                <Footer />
            </>

        </div>
    );
}

export default App;
