import styles from './ProjectItemFeatured.module.css';

export const ProjectItemFeatured = () => {

    return (

        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-8 col-lg-7">
                <img
                    className="img-fluid mb-3 mb-lg-0"
                    src="../img/bg-masthead.jpg"
                    alt="..."
                />
            </div>
            <div className="col-xl-4 col-lg-5">
                {/* <div className="featured-text text-center text-lg-left"> */}
                <div className={`${styles['featured-text']} ${styles['text-center']} ${styles['text-lg-left']}` }>
                    <h4>Shoreline</h4>
                    <p className="text-black-50 mb-0">
                        Grayscale is open source and MIT licensed. This means you can use
                        it for any project - even commercial projects! Download it,
                        customize it, and publish your website!
                    </p>
                </div>
            </div>
        </div>
    );
}