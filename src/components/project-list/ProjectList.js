import { ProjectItemFeatured } from "./project-item-featured/ProjectItemFeatured";
import { ProjectItem } from "./project-item/ProjectItem";


export const ProjectList = () => {

    const data = [
        {
            title: 'Misty',
            description: 'An example of where you can put an image of a project, or anything else, along with a description.',
            imageUrl : '../img/demo-image-01.jpg'
        },
        {
            title: 'Mountains',
            description: 'Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!',
            imageUrl : '../img/demo-image-02.jpg'
        },
        {
            title: 'Some title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quis.!',
            imageUrl : 'https://www.capturelandscapes.com/wp-content/uploads/2016/12/black-white-landscape-featured.jpg'
        }
    ]

    return (
        <section className="projects-section bg-light" id="projects">
            <div className="container px-4 px-lg-5">
                {/* Featured Project Row*/}
                <ProjectItemFeatured />

                {data.map(x => <ProjectItem key={x.title} data={x} />)}
                
                
            </div>
        </section>
    );
}