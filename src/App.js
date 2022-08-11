import './App.css';
import { About } from './components/common/About';
import { Contact } from './components/common/Contact';
import { Footer } from './components/common/Footer';
import { Signup } from './components/common/Signup';
import { Masthead } from './components/common/Masthead';
import { Navigation } from './components/common/Navigation';
import { ProjectList } from './components/project-list/ProjectList';
import { ProjectCreate } from './components/project-list/project-create/ProjectCreate';

function App() {
    return (
        <div className="App">
            <>
                <Navigation />
                
                <Masthead />

                <About />
                
                {/* <ProjectCreate /> */}

                <ProjectList />

                <Signup />

                <Contact />

                <Footer />
            </>

        </div>
    );
}

export default App;
