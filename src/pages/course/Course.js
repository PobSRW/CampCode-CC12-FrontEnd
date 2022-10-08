import Searchbar from '../../component/Searchbar';
import Footer from '../footer/Footer';
import { useCourseContext } from '../../context/courseContext';
import CourseItem from './CourseItem';

function Course() {
	const { courses } = useCourseContext();

	return (
		<>
			<div className='px-[200px]'>
				<div className='flex justify-center my-9 '>
					<Searchbar />
				</div>
				<div className='grid grid-cols-4 gap-6'>
					{courses?.map((course) => (
						<CourseItem
							key={course.id}
							price={course.priceCurrent}
							courseName={course.courseName}
							image={course.courseImage}
							id={course.id}
							description={course.description}
							instructorId={course.instructorId}
							instructorFirstName={course.Instructor.firstName}
							instructorLastName={course.Instructor.lastName}
						/>
					))}
					<CourseItem />
					<CourseItem />
					<CourseItem />
					<CourseItem />
					<CourseItem />
					<CourseItem />
					<CourseItem />
				</div>
			</div>
			<div className='mt-[80px]'>
				<Footer />
			</div>
		</>
	);
}

export default Course;
