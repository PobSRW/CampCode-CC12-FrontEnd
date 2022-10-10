import InstructorItem from '../instructors/InstructorItem';
import { useInstructorsContext } from '../../context/instructorContext';

function MeetMentor() {
	const { instructors } = useInstructorsContext();
	return (
		<>
			<div className='px-[200px] mt-5'>
				<h1 className='text-[35px] font-bold mb-5'>Meet Our Mentor</h1>
				<div className='grid grid-cols-2 gap-x-[50px]'>
					{instructors?.map((instructor) => (
						<InstructorItem
							key={instructor.id}
							firstName={instructor.firstName}
							lastName={instructor.lastName}
							reviewScore={instructor.reviewScore}
							profileImage={instructor.profileImage}
						/>
					))}

					<InstructorItem />
					<InstructorItem />
					<InstructorItem />
				</div>
			</div>
		</>
	);
}

export default MeetMentor;
