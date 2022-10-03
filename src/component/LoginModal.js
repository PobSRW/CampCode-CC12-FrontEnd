import { useState } from 'react';
import { useAuthContext } from '../context/authContext';

function LoginModal({ openModal, closeModal }) {
	const { login } = useAuthContext();
	const [loginState, setLoginState] = useState({
		email: '',
		password: '',
	});

	const handleOnChange = (e) => {
		setLoginState({ ...loginState, [e.target.name]: e.target.value });
	};

	const handleClickSubmit = async (e) => {
		e.preventDefault();
		login(loginState);
		closeModal();
	};

	if (!openModal) {
		return null;
	}
	return (
		<div
			className='fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50'
			onClick={closeModal}
		>
			<div className='flex justify-center items-center h-full'>
				<div
					className='flex flex-col bg-white w-[400px] h-[320px] rounded-lg justify-items-center'
					onClick={(e) => e.stopPropagation()}
				>
					<button className=' w-[50px] mt-3 ml-[350px]' onClick={closeModal}>
						<i className='fa-solid fa-xmark text-black'></i>
					</button>

					<div>
						<h1 className='text-3xl font-bold ml-8 mt-2 text-black'>Login</h1>
					</div>
					<div className='flex flex-col justify-items-center items-center '>
						<input
							className='w-[340px] h-12 bg-white rounded-lg mt-7 mb-2 border-2 border-slate-400 pl-3 text-black'
							type='email'
							placeholder='Email'
							name='email'
							value={loginState.email}
							onChange={handleOnChange}
						/>
						<input
							className='w-[340px] h-12 bg-white rounded-lg mb-8 border-2 border-slate-400 pl-3 text-black'
							type='password'
							placeholder='Password'
							name='password'
							value={loginState.password}
							onChange={handleOnChange}
						/>
						<button
							type='submit'
							className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-m   items-center dark:focus:ring-[#4285F4]/55  mb-2 w-[280px] h-[40px]'
							onClick={handleClickSubmit}
						>
							Login with CampCode
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginModal;
