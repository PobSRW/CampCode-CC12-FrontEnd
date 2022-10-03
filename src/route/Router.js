import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../headerPage/headerRender/Header';
import Course from '../pages/course/Course';
import Instructors from '../pages/instructors/Instructors';
import About from '../pages/about/About';
import HomePage from '../pages/homePage/HomePage';

function Router() {
	return (
		<Routes>
			<Route path='/' element={<Header />}>
				<Route path='/' element={<HomePage />} />
				<Route path='/course' element={<Course />} />
				<Route path='/instructors' element={<Instructors />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Route>
		</Routes>
	);
}

export default Router;
