import { useAuthContext } from '../../context/authContext';
import CourseItem from '../course/CourseItem';

function NewCourse() {
	const { items } = useAuthContext();
	return (
		<>
			<div className='px-[200px] mt-5'>
				<h1 className='text-[35px] font-bold mb-5'>New Courses</h1>
				<div className='grid grid-cols-4 gap-6'>
					{items?.map((item) => (
						<CourseItem
							key={item.id}
							price={item.priceCurrent}
							courseName={item.courseName}
							image={item.courseImage}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default NewCourse;
