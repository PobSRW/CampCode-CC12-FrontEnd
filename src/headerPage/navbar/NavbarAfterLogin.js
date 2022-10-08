import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import { useState } from 'react';

function NavbarAfterLogin() {
	const [toggleButton, setToggleButton] = useState(false);
	const handleClickToggle = () => {
		setToggleButton((prev) => !prev);
	};
	const {
		logout,
		isAdmin,
		userData: { firstName, lastName, email },
	} = useAuthContext();

	return (
		<div className='flex items-center justify-between h-[60px] px-[200px] bg-zinc-800 text-white'>
			<div className='text-2xl font-bold'>
				<Link to='/'>CampCode ...</Link>
			</div>
			<div className='flex'>
				<ul className='flex gap-4 mx-6 items-center'>
					<li>
						<Link to='/course'>Course</Link>
					</li>
					<li>
						<Link to='/instructors'>Instructor</Link>
					</li>
					{!isAdmin ? (
						<>
							<li>
								<Link to='/mylearning'>My Learning</Link>
							</li>
							<button>
								<Link to='/cart'>
									<i className='fa-solid fa-cart-shopping px-3'></i>
								</Link>
							</button>
						</>
					) : (
						''
					)}

					<div className='relative'>
						<button
							type='button'
							className='flex mr-3 text-sm bg-gray-800 rounded-full z-50'
							id='user-menu-button'
							aria-expanded='false'
							onClick={handleClickToggle}
						>
							<img
								className='w-8 h-8 rounded-full '
								alt='userProfileImage'
								src='https://i.pinimg.com/280x280_RS/e2/34/fe/e234fe6524a9bd9079a369e6e9228f64.jpg'
							/>
							{/* <!-- Dropdown menu --> */}
							<div
								className={`${
									!toggleButton ? 'hidden' : ''
								} absolute z-50 top-12 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 right-6`}
							>
								<div className='py-3 px-4 cursor-default'>
									<h1 className='block text-sm text-gray-900 dark:text-white cursor-auto'>
										{firstName} {lastName}
									</h1>
									<h1 className='block text-sm font-medium text-gray-500 truncate dark:text-gray-400 mt-2 cursor-auto'>
										{email}
									</h1>
								</div>
								<div>
									<ul className='py-1' aria-labelledby='user-menu-button'>
										{isAdmin ? (
											<>
												<Link
													to='/createcourse'
													className='block py-2 px-4 text-sm text-gray-700
										hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200
										dark:hover:text-white'
												>
													Create Course
												</Link>
												<Link
													to='/confirmpayment'
													className='block py-2 px-4 text-sm text-gray-700
										hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200
										dark:hover:text-white'
												>
													Confirm Payment
												</Link>
											</>
										) : (
											<Link
												className='block py-2 px-4 text-sm text-gray-700
										hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200
										dark:hover:text-white'
											>
												Settings
											</Link>
										)}

										<Link
											className='block py-2 px-4 text-sm text-gray-700
										hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200
										dark:hover:text-white'
											onClick={logout}
										>
											Log Out
										</Link>
									</ul>
								</div>
							</div>
						</button>
					</div>
				</ul>
			</div>
		</div>
	);
}

export default NavbarAfterLogin;
