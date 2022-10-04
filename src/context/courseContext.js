import { createContext, useContext, useEffect, useState } from 'react';
import * as courseApi from '../api/courseApi';

const CourseContext = createContext();

function CourseContextProvider({ children }) {
	const [courses, setCourses] = useState(null);

	useEffect(() => {
		const fetchCourseItem = async () => {
			try {
				const res = await courseApi.getCourse();
				setCourses(res.data.item);
			} catch (err) {
				console.log('Fetch Item Error');
			}
		};
		fetchCourseItem();
	}, []);

	return (
		<CourseContext.Provider value={{ courses }}>
			{children}
		</CourseContext.Provider>
	);
}

export const useCourseContext = () => {
	return useContext(CourseContext);
};

export default CourseContextProvider;
