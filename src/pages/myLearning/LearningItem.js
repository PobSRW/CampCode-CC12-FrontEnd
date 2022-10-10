function LearningItem({ course }) {
	return (
		<div>
			<div className='w-[260px] rounded overflow-hidden shadow-lg'>
				<img
					className='w-full'
					src={course.Course.courseImage}
					alt='courseImage'
				/>
				<div className='px-6 py-4'>
					<div className='font-bold text-xl mb-2'>
						{course.Course.courseName}
					</div>
					<p className='text-gray-700 text-base'>{course.Course.description}</p>
				</div>
				{/* <div className='px-6 pt-4 pb-2'>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						#photography
					</span>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						#travel
					</span>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						#winter
					</span>
				</div> */}
			</div>
		</div>
	);
}

export default LearningItem;
