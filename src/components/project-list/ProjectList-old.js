import { useEffect } from "react";
import { useState } from "react";



import { ProjectDetails } from "./project-details/ProjectDetails";
import { ProjectLeft } from "./project-item/ProjectLeft";
import { ProjectRight } from "./project-item/ProjectRight";


export const ProjectList = () => {

    const [selectedProj, setSelectedProj] = useState({ project: null, action: null });

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
    ]



    const closeHandler = () => {
        setSelectedProj({ project: null, action: null });
    }

    const detailsClickHandler = (projectId) => {
        let project = data.find(x => x._id === projectId);
        setSelectedProj({ project, action: 'details' })
    }

    const editClickHandler = (projectId) => {

    }


    return (
        <section className="projects-section bg-light" id="projects">

            {selectedProj.action === 'details' &&
                <ProjectDetails project={selectedProj.project} />
            }

            <div className="container px-4 px-lg-5">

                {data.map((project, i) =>
                    i % 2 == 0
                        ? <ProjectLeft
                            key={project._id}
                            project={project}
                            onDetailsClick={detailsClickHandler}
                            onEditClick={editClickHandler}
                        />
                        : <ProjectRight
                            key={project._id}
                            project={project}
                            onDetailsClick={detailsClickHandler}
                            onEditClick={editClickHandler}
                        />

                )}
            </div>
        </section>
    );
}