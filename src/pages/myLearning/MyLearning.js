import Footer from '../footer/Footer';
import { useCourseContext } from '../../context/courseContext';
import LearningItem from './LearningItem';
import { Link } from 'react-router-dom';

function MyLearning() {
	const { userCourses } = useCourseContext();
	// console.log(userCourses);
	return (
		<>
			<div className='px-[200px] mt-8 mb-16'>
				<div>
					<h1 className='text-6xl font-normal '>My Learning</h1>
				</div>
				<div className='grid grid-cols-4 mt-10'>
					{(userCourses || []).map((course) => {
						return (
							<Link to={`/course/${course.id}`} key={course.id}>
								<LearningItem course={course} />
							</Link>
						);
					})}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default MyLearning;
