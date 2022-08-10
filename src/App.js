import './App.css';
import { About } from './components/About';
import { Contact } from './components/common/Contact';
import { Footer } from './components/common/Footer';
import { Signup } from './components/common/Signup';
import { Masthead } from './components/Masthead';
import { Navigation } from './components/Navigation';
import { ProjectList } from './components/project-list/ProjectList';

function App() {
    return (
        <div className="App">
            <>
                <Navigation />
                
                <Masthead />

                <About />
                {/* Projects*/}
                <ProjectList />

                <Signup />

                <Contact />

                <Footer />



            </>

        </div>
    );
}

export default App;
