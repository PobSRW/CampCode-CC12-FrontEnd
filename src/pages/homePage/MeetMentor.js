import InstructorItem from '../instructors/InstructorItem';

function MeetMentor() {
	return (
		<>
			<div className='px-[200px] mt-5'>
				<h1 className='text-[35px] font-bold mb-5'>Meet Our Mentor</h1>
				<div className='grid grid-cols-2 mb-5 gap-x-[50px]'>
					<InstructorItem />
					<InstructorItem />
					<InstructorItem />
					<InstructorItem />
				</div>
			</div>
		</>
	);
}

export default MeetMentor;
