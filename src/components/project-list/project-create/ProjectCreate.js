import styles from './ProjectCreate.module.css';



export const ProjectCreate = ({onCreate, onClose}) => {

    return (
        <div className={`${styles['overlay']}`} >
            <div className={`${styles['backdrop']}`} onClick={onClose} ></div>
            <div className={`${styles['modal']}`}>
                <div className={`${styles['user-container']}`}>
                    <header className={`${styles['headers']}`}>
                        <h2>Add Project</h2>
                        <button className={`${styles['btn']} ${styles['close']}`} onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className={`${styles['svg-inline--fa']} ${styles['fa-xmark']}`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={onCreate}>
                        <div className={`${styles['form-row']}`}>
                            <div className={`${styles['form-group']}`}>
                                <label htmlFor="firstName">First name</label>
                                <div className={`${styles['input-wrapper']}`}>
                                    <span><i className={`${styles['fa-solid fa-user']}`}></i></span>
                                    <input id={`${styles['firstName']}`} name="firstName" type="text" />
                                </div>
                                <p className={`${styles['form-error']}`}>
                                    First name should be at least 3 characters long!
                                </p>
                            </div>
                            <div className={`${styles['form-group']}`}>
                                <label htmlFor="lastName">Last name</label>
                                <div className={`${styles['input-wrapper']}`}>
                                    <span><i className={`${styles['fa-solid']} ${styles['fa-user']}`}></i></span>
                                    <input id={`${styles["lastName"]}`} name="lastName" type="text" />
                                </div>
                                <p className={`${styles['form-error']}`}>
                                    Last name should be at least 3 characters long!
                                </p>
                            </div>
                        </div>

                        <div className={`${styles['form-row']}`}>
                            <div className={`${styles['form-group']}`}>
                                <label htmlFor="email">Email</label>
                                <div className={`${styles["input-wrapper"]}`}>
                                    <span><i className={`${styles["fa-solid"]} ${styles["fa-envelope"]}`}></i></span>
                                    <input id={`${styles["email"]}`} name="email" type="text" />
                                </div>
                                <p className={`${styles["form-error"]}`}>Email is not valid!</p>
                            </div>
                            <div className={`${styles["form-group"]}`}>
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className={`${styles["input-wrapper"]}`}>
                                    <span><i className={`${styles['fa-solid']} ${styles['fa-phone']}`}></i></span>
                                    <input id={`${styles["phoneNumber"]}`} name="phoneNumber" type="text" />
                                </div>
                                <p className={`${styles['form-error']}`}>Phone number is not valid!</p>
                            </div>
                        </div>

                        <div className={`${styles['form-group']} ${styles['long-line']}`}>
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className={`${styles["input-wrapper"]}`}>
                                <span><i className={`${styles['fa-solid']} ${styles['fa-image']}`}></i></span>
                                <input id={`${styles["imageUrl"]}`} name="imageUrl" type="text" />
                            </div>
                            <p className={`${styles['form-error']}`}>ImageUrl is not valid!</p>
                        </div>

                        <div className={`${styles["form-row"]}`}>
                            <div className={`${styles["form-group"]}`}>
                                <label htmlFor="country">Country</label>
                                <div className={`${styles["input-wrapper"]}`}>
                                    <span><i className={`${styles['fa-solid']} ${styles['fa-map']}`}></i></span>
                                    <input id={`${styles["country"]}`} name="country" type="text" />
                                </div>
                                <p className={`${styles["form-error"]}`}>
                                    Country should be at least 2 characters long!
                                </p>
                            </div>
                            <div className={`${styles["form-group"]}`}>
                                <label htmlFor="city">City</label>
                                <div className={`${styles["input-wrapper"]}`}>
                                    <span><i className={`${styles['fa-solid']} ${styles["fa-city"]}`}></i></span>
                                    <input id={`${styles["city"]}`} name="city" type="text" />
                                </div>
                                <p className={`${styles["form-error"]}`}>
                                    City should be at least 3 characters long!
                                </p>
                            </div>
                        </div>

                        <div className={`${styles["form-row"]}`}>
                            <div className={`${styles["form-group"]}`}>
                                <label htmlFor="street">Street</label>
                                <div className={`${styles["input-wrapper"]}`}>
                                    <span><i className={`${styles['fa-solid']} ${styles["fa-map"]}`}></i></span>
                                    <input id={`${styles["street"]}`} name="street" type="text" />
                                </div>
                                <p className={`${styles["form-error"]}`}>
                                    Street should be at least 3 characters long!
                                </p>
                            </div>
                            <div className={`${styles["form-group"]}`}>
                                <label htmlFor="streetNumber">Street number</label>
                                <div className={`${styles["input-wrapper"]}`}>
                                    <span><i className={`${styles['fa-solid']} ${styles["fa-house-chimney"]}`}></i></span>
                                    <input id={`${styles["streetNumber"]}`} name="streetNumber" type="text" />
                                </div>
                                <p className={`${styles["form-error"]}`}>
                                    Street number should be a positive number!
                                </p>
                            </div>
                        </div>
                        <div id={`${styles['form-actions']}`}>
                            <button id={`${styles['action-save']}`} className={`${styles["btn"]}`} type="submit">Save</button>
                            <button id={`${styles['action-cancel']}`} className={`${styles["btn"]}`} type="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}