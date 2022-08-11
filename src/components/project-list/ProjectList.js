import { useState } from "react";
import { ProjectDetails } from "./project-details/ProjectDetails";
import { Project } from "./project-item/Project";


export const ProjectList = () => {

    const [selectetProj, setSelectedProj] = useState({ project: null, action: null });

    const data = [
        {
            _id: 'dfafa1',
            title: 'Misty',
            description: 'An example of where you can put an image of a project, or anything else, along with a description.',
            imageUrl: '../img/demo-image-01.jpg'
        },
        {
            _id: 'derqqerqa2',
            title: 'Mountains',
            description: 'Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!',
            imageUrl: '../img/demo-image-02.jpg'
        },
        {
            _id: 'eqqerq3',
            title: 'Some title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quis.!',
            imageUrl: 'https://www.capturelandscapes.com/wp-content/uploads/2016/12/black-white-landscape-featured.jpg'
        },
        {
            _id: 'vczvzv4',
            title: 'Some other title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem minus veniam est tempora adipisci possimus laborum in, illum eligendi pariatur aut natus fugit, tempore asperiores saepe delectus aliquam modi.',
            imageUrl: 'https://www.guillenphoto.com/data/blog/2019/016-chronique-pourquoi-photographier-paysages-bw-I/images/photograph-landscapes-in-black-and-white-amar-guillen-landscape-photographer.jpg'
        }
    ]



    const closeHandler = () => {
        setSelectedProj({ project: null, action: null });
    }

    const detailsClickHandler = (projId) => {
        let project = data.find(x => x._id === projId);
        setSelectedProj({ project, action: 'details' })
    }


    return (
        <section className="projects-section bg-light" id="projects">

            <div className="container px-4 px-lg-5">
                {selectetProj.action === 'details' &&
                    <ProjectDetails project={selectetProj.project} onClose={closeHandler} />
                }

                {data.map((project, i) =>
                    <Project
                        key={project._id}
                        index={i}
                        project={project}
                        onDetailsClick={detailsClickHandler}
                    />
                )}


            </div>
        </section>
    );
}