import CourseItem from '../course/CourseItem';

function PoppularCourse() {
	return (
		<div className='px-[200px] mt-5'>
			<h1 className='text-[35px] font-bold mb-5'>Most Popular</h1>
			<div className='grid grid-cols-4 gap-6'>
				<CourseItem />
				<CourseItem />
				<CourseItem />
				<CourseItem />
			</div>
		</div>
	);
}

export default PoppularCourse;
