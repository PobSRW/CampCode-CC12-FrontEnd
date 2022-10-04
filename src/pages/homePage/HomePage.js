import Footer from '../footer/Footer';
import Hightlight from './Hightlight';
import MeetMentor from './MeetMentor';
import NewCourse from './NewCourse';
import PoppularCourse from './PoppularCourse';

function HomePage() {
	return (
		<>
			<div className='mb-10'>
				<Hightlight />
				<PoppularCourse />
				<NewCourse />
				<MeetMentor />
			</div>
			<Footer />
		</>
	);
}

export default HomePage;
