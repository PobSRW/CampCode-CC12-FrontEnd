import { useState } from 'react';
import { useAuthContext } from '../../context/authContext';
import { useCartContext } from '../../context/cartContext';
import Footer from '../footer/Footer';
import PaymentSlip from './PaymentSlip';

function Payment() {
	const { userData } = useAuthContext();
	const { totalprice, cartItems, checkout, slipImage } = useCartContext();
	const [showPayment, setShowPayment] = useState(false);

	const onClickCheckout = async () => {
		const formData = new FormData();
		formData.append('slipUrl', slipImage);
		const data = JSON.stringify(cartItems);
		formData.append('courses', data);

		for (const value of formData.values()) {
			console.log(value);
		}

		await checkout(formData);
	};

	return (
		<>
			<div className=' mt-[50px] px-[200px] flex justify-center gap-20'>
				<div className='w-2/3'>
					<div>
						<h1 className='text-5xl font-black text-center'>Checkout</h1>
					</div>
					<div>
						<h1 className='mt-6 text-2xl font-black'>Billing to</h1>
					</div>
					<div className='flex flex-col mt-3'>
						<label htmlFor='firstName' className='text-xl font-bold mb-2'>
							Firstname
						</label>
						<input
							id='firstName'
							className='bg-stone-200 h-[40px] rounded-lg pl-5'
							placeholder={userData.firstName}
							disabled
						/>
						<label htmlFor='LastName' className='text-lg font-bold  my-2'>
							Lastname
						</label>
						<input
							id='LastName'
							className='bg-stone-200 h-[40px] rounded-lg pl-5'
							placeholder={userData.lastName}
							disabled
						/>
						<label htmlFor='Email' className='text-lg font-bold  my-2'>
							Email
						</label>
						<input
							id='Email'
							className='bg-stone-200 h-[40px] rounded-lg pl-5'
							placeholder={userData.email}
							disabled
						/>
						<label htmlFor='PhoneNumber' className='text-lg font-bold  my-2'>
							Phone Number
						</label>
						<input
							id='PhoneNumber'
							className='bg-stone-200 h-[40px] rounded-lg pl-5'
							placeholder={userData.phone}
							disabled
						/>
						<div className='mt-10'>
							<h1 className='mt-6 text-2xl font-black'>Payment Method</h1>
							<div className='flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 my-5'>
								<input
									id='bordered-radio-1'
									type='radio'
									value=''
									name='paymentMethod'
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									onChange={() => setShowPayment(true)}
								/>
								<label
									htmlFor='bordered-radio-1'
									className='py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
								>
									โอนเงินผ่านทางธนาคาร
								</label>
							</div>
							<div>{showPayment ? <PaymentSlip /> : ''}</div>
						</div>
					</div>
				</div>
				<div className='w-1/3 bg-stone-200 rounded-lg  h-[250px] mt-20'>
					<div>
						<h1 className='text-3xl font-bold text-center my-5'>Summary</h1>
					</div>
					<div className='text-xl  text-center mb-10'>
						Total Price :{' '}
						<span className='text-3xl font-bold'>{totalprice}</span> BAHT
					</div>

					<div className='flex justify-center rounded'>
						<button
							className='bg-violet-500 w-[250px] h-[50px] font-bold text-lg rounded-md'
							onClick={onClickCheckout}
						>
							Complete Checkout
						</button>
					</div>
					<div className='text-center mt-2'>
						<span className='text-xs'>2-Second Money-Back Guarantee</span>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Payment;
