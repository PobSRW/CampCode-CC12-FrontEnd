import axios from '../config/axios';

export const getCourse = () => axios.get('/course/courseitem');
export const getNewCourse = () => axios.get('/course/coursenewitem');
export const getCourseById = (id) => {
	return axios.get(`/course/courseupdatebyid/${id}`);
};

export const createCourse = (input) =>
	axios.post('/course/createcourse', input);

export const updateCourse = (id, data) =>
	axios.patch(`/course/courseupdate/${id}`, data);

export const deleteCourse = (id) => {
	return axios.delete(`/course/coursedelete/${id}`);
};
