import { useCourseContext } from '../../context/courseContext';
import CourseItem from '../course/CourseItem';

function NewCourse() {
	const { newCourses } = useCourseContext();

	return (
		<>
			<div className='px-[200px] mt-5'>
				<h1 className='text-[35px] font-bold mb-5'>New Courses</h1>
				<div className='grid grid-cols-4 gap-6'>
					{newCourses?.map((course) => (
						<CourseItem
							key={course.id}
							price={course.priceCurrent}
							courseName={course.courseName}
							image={course.courseImage}
							id={course.id}
							description={course.description}
							instructorId={course.instructorId}
							Instructor={course.Instructor}
							instructorFirstName={course.Instructor.firstName}
							instructorLastName={course.Instructor.lastName}
							disable
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default NewCourse;
