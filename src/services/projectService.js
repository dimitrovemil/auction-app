import * as request from "./requester";

// const baseUrl = 'http://localhost:3030/jsonstore/projects';
const baseUrl = 'http://localhost:3030/data/projects';

export const getAll = () => request.get(baseUrl);

export const getOne = (projectId) => request.get(`${baseUrl}/${projectId}`);

export const create = (projectData) => request.post(baseUrl, projectData);

export const edit = (projectId, projectData) => request.put(`${baseUrl}/${projectId}`, projectData);

export const remove = (projectId) => request.del(`${baseUrl}/${projectId}`);
