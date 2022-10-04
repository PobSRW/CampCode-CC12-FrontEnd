import CourseItem from '../course/CourseItem';
import Footer from '../footer/Footer';

function MyLearning() {
	return (
		<>
			<div className='px-[200px] mt-8 mb-16'>
				<div>
					<h1 className='text-6xl font-normal '>My Learning</h1>
				</div>
				<div className='grid grid-cols-4 mt-10'>
					<CourseItem />
					<CourseItem />
					<CourseItem />
					<CourseItem />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default MyLearning;
