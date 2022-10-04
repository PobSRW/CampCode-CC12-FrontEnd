import { useInstructorsContext } from '../../context/instructorContext';
import Footer from '../footer/Footer';
import InstructorItem from './InstructorItem';

function Instructors() {
	const { instructors } = useInstructorsContext();
	return (
		<>
			<div className='px-[200px] mt-5 mb-10'>
				<div className='grid grid-cols-2'>
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
					<InstructorItem />
					<InstructorItem />
					<InstructorItem />
					<InstructorItem />
					<InstructorItem />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Instructors;
