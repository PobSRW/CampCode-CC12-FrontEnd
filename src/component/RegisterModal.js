import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthContext } from '../context/authContext';
import { validateRegister } from '../validation/validateUser';

function RegisterModal({ openModal, closeModal }) {
	const { register } = useAuthContext();

	const [input, setInput] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
	});

	const handleChangeInput = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleSubmitForm = async (e) => {
		e.preventDefault();

		const { error } = validateRegister(input);

		if (error) {
			return toast.error(error.message);
		}

		try {
			register(input);
			closeModal();
		} catch (err) {
			console.log(err);
		}
	};

	if (!openModal) {
		return null;
	}
	return (
		<div
			className='fixed top-0 bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 z-50'
			onClick={closeModal}
		>
			<div className='flex justify-center items-center h-full'>
				<div
					className='flex flex-col bg-white w-[500px] h-[500px] rounded-lg justify-items-center'
					onClick={(e) => e.stopPropagation()}
				>
					<button className=' w-[50px] mt-3 ml-[450px]' onClick={closeModal}>
						<i className='fa-solid fa-xmark text-black'></i>
					</button>

					<div>
						<h1 className='text-3xl font-bold ml-8 mt-2 text-black'>
							Get Started!
						</h1>
					</div>
					<form onSubmit={handleSubmitForm}>
						<div className='flex justify-center mt-7 gap-1'>
							<input
								className='w-[180px] h-12 bg-white rounded-lg  border-2 border-slate-400 pl-3 text-black'
								type='text'
								name='firstName'
								placeholder='FirstName'
								value={input.firstName}
								onChange={handleChangeInput}
							/>
							<input
								className='w-[180px] h-12 bg-white rounded-lg  border-2 border-slate-400 pl-3 text-black'
								type='text'
								name='lastName'
								value={input.lastName}
								placeholder='LastName'
								onChange={handleChangeInput}
							/>
						</div>
						<div className='flex flex-col justify-items-center items-center '>
							<input
								className='w-[365px] h-12 bg-white rounded-lg  border-2 border-slate-400 pl-3 mt-2 text-black'
								type='text'
								name='email'
								value={input.email}
								placeholder='Email'
								onChange={handleChangeInput}
							/>
							<input
								className='w-[365px] h-12 bg-white rounded-lg  border-2 border-slate-400 pl-3 mt-2 text-black'
								type='text'
								name='phone'
								value={input.phone}
								placeholder='MobilePhone'
								onChange={handleChangeInput}
							/>
							<input
								className='w-[365px] h-12 bg-white rounded-lg  border-2 border-slate-400 pl-3 mt-2 text-black'
								type='password'
								name='password'
								value={input.password}
								placeholder='Password'
								onChange={handleChangeInput}
							/>
							<input
								className='w-[365px] h-12 bg-white rounded-lg  border-2 border-slate-400 pl-3 mt-2 mb-8 text-black'
								type='password'
								name='confirmPassword'
								value={input.confirmPassword}
								placeholder='Confirm Password'
								onChange={handleChangeInput}
							/>
							<button className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-l   items-center dark:focus:ring-[#4285F4]/55  mb-2 w-[280px] h-[40px] '>
								Register with CampCode
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default RegisterModal;

<div>
	<div>
		<button></button>
	</div>
</div>;
