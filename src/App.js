import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as projectService from './services/projectService';

import './App.css';
import { About } from './components/common/About';
import { Contact } from './components/common/Contact';
import { Footer } from './components/common/Footer';
import { UserSignup } from './components/users/user-signup/UserSignup';
import { Masthead } from './components/common/Masthead';
import { Navigation } from './components/common/Navigation';
import { ProjectList } from './components/project-list/ProjectList';
import { ProjectDetails } from './components/project-list/project-details/ProjectDetails';
import { UserLogin } from './components/users/user-login/UserLogin';
import { ProjectCreate } from './components/project-list/project-create/ProjectCreate'

function App() {

    const mockData = [
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

    const [create, setCreate] = useState(null);
    const [projects, setProjects] = useState([]);

    const [data, setData] = useState([])

    const closeHandler = () => {
        setCreate(null)
    }

    const showCreateHandler = () => {
        console.log('show add new');
        setCreate(true)
    }

    const createProjectHandler = (projectData) => {
        //projectService.create(projectData)
        console.log(projectData);
        setData(state =>( [...state, projectData]))
        closeHandler();
    }


    // useEffect(() => {
    //     projectService.getAll()
    //         .then(result => {
    //             setProjects(result);
    //         });
    // }, []);

    useEffect(() => {
        setData(mockData)
    }, []);

    return (
        <div className="App">
            <>
                {<Navigation showCreate={showCreateHandler} />}

                {create && <ProjectCreate onClose={closeHandler} onCreate={createProjectHandler} />}

                <Routes>
                    <Route path='/' element={<Masthead />} />
                    <Route path='/projects' element={<ProjectList projects={data} />} />
                    <Route path='/projects/details/:projectId' element={<ProjectDetails />} />

                    <Route path='/about' element={<About />} />
                    <Route path='/contacts' element={<Contact />} />
                    <Route path='/signup' element={<UserSignup />} />
                    <Route path='/login' element={<UserLogin />} />
                    <Route path='*' element={<h1>Not found</h1>} />
                </Routes>
                

                <Footer />
            </>

        </div>
    );
}

export default App;
