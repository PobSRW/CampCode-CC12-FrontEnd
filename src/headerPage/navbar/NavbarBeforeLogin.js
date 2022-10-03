import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../../component/LoginModal';
import RegisterModal from '../../component/RegisterModal';

function NavbarBeforeLogin() {
	const [openRegisModal, setOpenRegisModal] = useState(false);
	const [openloginModal, setOpenLoginModal] = useState(false);
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
						<Link to='/about'>About Us</Link>
					</li>
				</ul>
				<div>
					<button
						className=' px-3 py-2 mx-2 font-bold'
						onClick={() => setOpenLoginModal(true)}
					>
						Login
					</button>
				</div>
				<button
					className='bg-indigo-500 rounded-lg px-3 font-bold  text-white'
					onClick={() => setOpenRegisModal(true)}
				>
					Get Started!
				</button>
			</div>
			<RegisterModal
				openModal={openRegisModal}
				closeModal={() => setOpenRegisModal(false)}
			/>
			<LoginModal
				openModal={openloginModal}
				closeModal={() => setOpenLoginModal(false)}
			/>
		</div>
	);
}

export default NavbarBeforeLogin;
