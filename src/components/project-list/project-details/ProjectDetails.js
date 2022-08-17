import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const ProjectDetails = () => {

    const data = [
        {
            _id: '1',
            title: 'Misty',
            description: 'An example of where you can put an image of a project, or anything else, along with a description.',
            imageUrl: 'https://www.rwongphoto.com/images/xl/RW9092-BW_web.jpg'
        },
        {
            _id: '2',
            title: 'Mountains',
            description: 'Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!',
            imageUrl: 'https://m.media-amazon.com/images/I/A1xrjV+Y-AL._SL1500_.jpg'
        },
        {
            _id: '3',
            title: 'Some title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quis.!',
            imageUrl: 'https://www.capturelandscapes.com/wp-content/uploads/2016/12/black-white-landscape-featured.jpg'
        },
        {
            _id: '4',
            title: 'Some other title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem minus veniam est tempora adipisci possimus laborum in, illum eligendi pariatur aut natus fugit, tempore asperiores saepe delectus aliquam modi.',
            imageUrl: 'https://www.guillenphoto.com/data/blog/2019/016-chronique-pourquoi-photographier-paysages-bw-I/images/photograph-landscapes-in-black-and-white-amar-guillen-landscape-photographer.jpg'
        }
    ];

    const [selectedProject, setSelectedProject] = useState({});
    
    const { projectId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // fetch(`.../${projectId}`)
        //     .then(res => res.json())
        //     .then(result => {
        //         setSelectedProject(result);
        //     })
        //     .catch(navigate('/not-found'));

        const project = data.find(x => x._id == projectId);
        setSelectedProject(project);
    }, [projectId]) // useEffetc depends on productId; make a new request when the projectId changes

    const nextProjectHandler = () => {
        // navigate(`/projects/details/${Number(projectId) + 1}`, {replace: true})
        navigate(`/projects/details/${Number(projectId) + 1}`);
    }


    return (
        <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            < div className="col-lg-6" >
                <img
                    className="img-fluid"
                    src={selectedProject.imageUrl}
                    alt="..."
                />
            </div >
            <div className="col-lg-6">
                <div className="bg-black text-center h-100 project">
                    <div className="d-flex h-100">
                        <div className="project-text w-100 my-auto text-center text-lg-left">
                            <h4 className="text-white">{selectedProject.title}</h4>
                            <p className="mb-0 text-white-50">
                                {selectedProject.description}
                            </p>
                            <hr className="d-none d-lg-block mb-0 ms-0" />
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">

                            </h2>
                            {/* button with type "button" outside of a form will not reload the page;
                                    inside of a form by default it's type="submit", can skip it */}
                            {/* <button type="submit" className="btn btn-primary" href="/#">type submit</button>
                                    <button type="button" className="btn btn-primary" href="/#">type btn</button> */}
                            {/* <a className="btn btn-primary" href="/#"> Details </a> */}
                            <a className="btn btn-primary" onClick={nextProjectHandler}> Next </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}