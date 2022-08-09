import './App.css';
import { Contact } from './components/common/Contact';
import { Footer } from './components/common/Footer';
import { Signup } from './components/common/Signup';
import { ProjectList } from './components/project-list/ProjectList';

function App() {
    return (
        <div className="App">
            <>
                {/* Navigation*/}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container px-4 px-lg-5">
                        <a className="navbar-brand" href="#page-top">
                            Start Bootstrap
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
                                    <a className="nav-link" href="#about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects">
                                        Projects
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#signup">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Masthead*/}
                <header className="masthead">
                    <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                        <div className="d-flex justify-content-center">
                            <div className="text-center">
                                <h1 className="mx-auto my-0 text-uppercase">Grayscale</h1>
                                <h2 className="text-white-50 mx-auto mt-2 mb-5">
                                    A free, responsive, one page Bootstrap theme created by Start
                                    Bootstrap.
                                </h2>
                                <a className="btn btn-primary" href="#about">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                {/* About*/}
                <section className="about-section text-center" id="about">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="text-white mb-4">Built with Bootstrap 5</h2>
                                <p className="text-white-50">
                                    Grayscale is a free Bootstrap theme created by Start Bootstrap. It
                                    can be yours right now, simply download the template on
                                    <a href="https://startbootstrap.com/theme/grayscale/">
                                        the preview page.
                                    </a>
                                    The theme is open source, and you can use it for any purpose,
                                    personal or commercial.
                                </p>
                            </div>
                        </div>
                        <img className="img-fluid" src="../img/ipad.png" alt="..." />
                    </div>
                </section>
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
