import Searchbar from '../../component/Searchbar';
import Footer from '../footer/Footer';
import OurCourse from './OurCourse';

function Course() {
	return (
		<>
			<div className='px-[200px]'>
				<div className='flex justify-center my-9 '>
					<Searchbar />
				</div>
				<div className='grid grid-cols-2 gap-6'>
					<OurCourse />
					<OurCourse />
					<OurCourse />
					<OurCourse />
					<OurCourse />
					<OurCourse />
					<OurCourse />
					<OurCourse />
				</div>
			</div>
			<div className='mt-5'>
				<Footer />
			</div>
		</>
	);
}

export default Course;
