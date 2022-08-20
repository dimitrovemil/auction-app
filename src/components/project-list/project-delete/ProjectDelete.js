import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ProjectContext } from '../../../contexts/ProjectContext';
import * as projectService from '../../../services/projectService';

export const ProjectDelete = () => {
    const navigate = useNavigate();
    const { projectId } = useParams();
    const { projectDelete } = useContext(ProjectContext);
    console.log(projectId);
    useEffect(() => {
        projectService.remove(projectId)
            .then(() => {
                projectDelete(projectId);
                navigate('/projects');
            })
            .catch(() => {
                navigate('/');
            });
    });

    return null;
}