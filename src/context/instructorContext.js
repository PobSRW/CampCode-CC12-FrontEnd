import { createContext, useContext, useEffect, useState } from 'react';
import * as instructorApi from '../api/instructorApi';

const InstructorContext = createContext();

function InstructorContextProvider({ children }) {
	const [instructors, setInstructors] = useState(null);

	useEffect(() => {
		const fetchInstructorsItem = async () => {
			try {
				const res = await instructorApi.getInstructor();
				setInstructors(res.data.instructor);
			} catch (err) {
				console.log('Fetch Item Error');
			}
		};
		fetchInstructorsItem();
	}, []);

	return (
		<InstructorContext.Provider value={{ instructors }}>
			{children}
		</InstructorContext.Provider>
	);
}

export const useInstructorsContext = () => {
	return useContext(InstructorContext);
};

export default InstructorContextProvider;
