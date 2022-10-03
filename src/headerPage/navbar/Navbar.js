// import NavbarAfterLogin from './NavbarAfterLogin';
import NavbarBeforeLogin from './NavbarBeforeLogin';
import NavbarAfterLogin from './NavbarAfterLogin';
import { useAuthContext } from '../../context/authContext';

function Navbar() {
	const { user } = useAuthContext();
	return (
		<>
			{user ? <NavbarAfterLogin /> : <NavbarBeforeLogin />}
			{/* <NavbarBeforeLogin /> */}
		</>
	);
}

export default Navbar;
