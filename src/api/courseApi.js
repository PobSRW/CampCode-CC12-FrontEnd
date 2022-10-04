import axios from '../config/axios';

export const getCourse = () => axios.get('/course/courseitem');
