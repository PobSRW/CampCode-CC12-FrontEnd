import Footer from '../footer/Footer';
import Hightlight from './Hightlight';
import MeetMentor from './MeetMentor';
import NewCourse from './NewCourse';
import PoppularCourse from './PoppularCourse';

function HomePage() {
	return (
		<div>
			<Hightlight />
			<PoppularCourse />
			<NewCourse />
			<MeetMentor />
			<Footer />
		</div>
	);
}

export default HomePage;
