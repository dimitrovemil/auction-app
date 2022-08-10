

export const About = () => {

    return (

        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-white mb-4">Welcome to the "The Art Auction House"</h2>
                        <p className="text-white-50">
                        The place where you can publish, get appraised, sell or simply enjoy painting, sculpture and art pieces. 
                            {/* Grayscale is a free Bootstrap theme created by Start Bootstrap. It
                            can be yours right now, simply download the template on
                            <a href="https://startbootstrap.com/theme/grayscale/">
                                the preview page.
                            </a>
                            The theme is open source, and you can use it for any purpose,
                            personal or commercial. */}
                        </p>
                    </div>
                </div>
                <img className="img-fluid" src="../img/ipad.png" alt="..." />
            </div>
        </section>
    );
}