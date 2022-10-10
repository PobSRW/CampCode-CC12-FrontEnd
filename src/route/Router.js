import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import Header from '../headerPage/headerRender/Header';
import Course from '../pages/course/Course';
import Instructors from '../pages/instructors/Instructors';
import About from '../pages/about/About';
import HomePage from '../pages/homePage/HomePage';
import MyLearning from '../pages/myLearning/MyLearning';
import PageNotFound from '../pages/notFound/PageNotFound';
import ShoppingCart from '../pages/shoppingCart/ShoppingCart';
import CreateCourse from '../pages/createCourse/CreateCourse';
import Checkout from '../pages/checkout/Checkout';
import ConfirmPayment from '../pages/confirmPayment/ConfirmPayment';
import LearningCourse from '../pages/myLearning/LearningCourse';

function Router() {
	const { user, isAdmin } = useAuthContext();
	return (
		<Routes>
			{user ? (
				<Route path='/' element={<Header />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/course' element={<Course />} />
					<Route path='/instructors' element={<Instructors />} />
					<Route path='/about' element={<About />} />

					{isAdmin ? (
						<Route>
							<Route path='/createcourse' element={<CreateCourse />} />
							<Route path='/confirmpayment' element={<ConfirmPayment />} />
						</Route>
					) : (
						<Route>
							<Route path='/cart' element={<ShoppingCart />} />
							<Route path='/mylearning' element={<MyLearning />} />
							<Route path='/checkout' element={<Checkout />} />
							<Route path='/course/:courseid' element={<LearningCourse />} />
							<Route path='*' element={<PageNotFound />} />
						</Route>
					)}
					<Route path='*' element={<Navigate to='/' />} />
				</Route>
			) : (
				<Route path='/' element={<Header />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/course' element={<Course />} />
					<Route path='/instructors' element={<Instructors />} />
					<Route path='/about' element={<About />} />
					<Route path='*' element={<PageNotFound />} />
				</Route>
			)}
		</Routes>
	);
}

export default Router;
