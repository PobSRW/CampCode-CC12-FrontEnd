import { useCourseContext } from '../../context/courseContext';
import CourseItem from '../course/CourseItem';

function NewCourse() {
	const { courses } = useCourseContext();
	return (
		<>
			<div className='px-[200px] mt-5'>
				<h1 className='text-[35px] font-bold mb-5'>New Courses</h1>
				<div className='grid grid-cols-4 gap-6'>
					{courses?.map((course) => (
						<CourseItem
							key={course.id}
							price={course.priceCurrent}
							courseName={course.courseName}
							image={course.courseImage}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default NewCourse;
