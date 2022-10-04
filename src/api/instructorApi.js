import axios from '../config/axios';

export const getInstructor = () => axios.get('instructor/getinstructor');
