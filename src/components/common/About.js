

export const About = () => {

    return (

        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-white mb-4">Welcome to the "The Art Auction House"</h2>
                        <p className="text-white-50">
                            The place where you can publish, get appraised, sell or simply enjoy painting, sculpture and art pieces.<br />
                            <a href="#projects">Browse our collection</a>
                            <span> or </span>
                            <a href="#signup">Sign-up</a>
                            <span> / </span>
                            <a href="#login">Login</a>
                            <span> to participate in the ongoing </span>
                            <a href="#featured">Auctions</a>.
                        </p>
                    </div>
                </div>
                <img className="img-fluid"
                    // src="https://c0.wallpaperflare.com/preview/438/543/711/judge-hammer-auction-hammer-auction-thumbnail.jpg" alt="..."
                    // src="https://c1.wallpaperflare.com/preview/88/121/269/hammer-court-judge-justice.jpg" alt="..."
                    // src="https://www.nicepng.com/png/full/312-3123089_court-hammer-png-file-judge.png" alt="..."
                    // src="https://img.favpng.com/5/17/13/judge-lawyer-court-gavel-barrister-png-favpng-ugzjqWGFGLgvTN993u5TWJNjy.jpg" alt="..."
                    src="https://purepng.com/public/uploads/large/purepng.com-gavelgavelceremonialmallethardwoodhandlewoodenclipart-1421526496576wk9yx.png" alt="..."
                />
            </div>
        </section>
    );
}