import { Routes, Route } from 'react-router-dom';


import './App.css';
import { About } from './components/common/About';
import { Contact } from './components/common/Contact';
import { Footer } from './components/common/Footer';
import { UserSignup } from './components/users/userSignup/UserSignup';
import { Masthead } from './components/common/Masthead';
import { Navigation } from './components/common/Navigation';
import { ProjectList } from './components/project-list/ProjectList';
import { ProjectCreate } from './components/project-list/project-create/ProjectCreate';
import { useState } from 'react';
import { ProjectDetails } from './components/project-list/project-details/ProjectDetails';

function App() {

    const [view, setView] = useState(null);

    const viewProjectsHandler = () => {
        setView('projects');
    }

    const signupHandler = () => {
        setView('signup');
    }
  
    

    return (

        <div className="App">
            <>
                {/* <Navigation viewProjects={viewProjectsHandler} signup={signupHandler} /> */}

                {<Navigation />}

                <Routes>
                    <Route path='/' element={<Masthead />} />
                    <Route path='/projects/*' element={<ProjectList />} />
                    <Route path='/projects/details/:projectId' element={<ProjectDetails />} />
                    
                    <Route path='/about' element={<About />} />
                    <Route path='/contacts' element={<Contact />} />
                    <Route path='/signup' element={<UserSignup />} />
                    <Route path='*' element={<h1>Not found</h1>} />
                </Routes>

                  


                {/* <About /> */}

                {/* <ProjectCreate /> */}
                {/* {view == 'projects' && <ProjectList />}

                {view == 'signup' && <UserSignup />} */}


                {/* <Contact /> */}

                <Footer />
            </>

        </div>
    );
}

export default App;
