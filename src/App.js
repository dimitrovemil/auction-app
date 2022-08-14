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
                <Navigation viewProjects={viewProjectsHandler} signup={signupHandler} />
                
                {<Masthead />}
                

                {/* <About /> */}
                
                {/* <ProjectCreate /> */}
                {view == 'projects' && <ProjectList />}
                
                {view == 'signup' && <UserSignup />}
                

                {/* <Contact /> */}

                <Footer />
            </>

        </div>
    );
}

export default App;
