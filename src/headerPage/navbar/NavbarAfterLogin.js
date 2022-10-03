import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';

function NavbarAfterLogin() {
	const { logout } = useAuthContext();
	return (
		<div className='flex items-center justify-between h-[60px] px-[200px] bg-zinc-800 text-white'>
			<div>
				<Link to='/'>CampCode</Link>
			</div>
			<div className='flex'>
				<ul className='flex gap-6 mx-6 items-center'>
					<li>
						<Link to='/course'>Course</Link>
					</li>
					<li>
						<Link to='/instructors'>Instructor</Link>
					</li>
					<li>
						<Link to='#'>My Learning</Link>
					</li>
					<button>
						<i class='fa-solid fa-cart-shopping'></i>
					</button>
					<button onClick={logout}>Log out</button>
				</ul>
			</div>
		</div>
	);
}

export default NavbarAfterLogin;
