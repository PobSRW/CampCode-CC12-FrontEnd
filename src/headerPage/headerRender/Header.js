import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

function Header() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export default Header;
