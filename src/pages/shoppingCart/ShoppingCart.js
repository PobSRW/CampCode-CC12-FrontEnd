import Footer from '../footer/Footer';

function ShoppingCart() {
	return (
		<>
			<div className='px-[200px] my-6'>
				<h1 className='text-7xl'>Shopping Cart</h1>
				<div className='flex mt-10'>
					<div className='h-[500px] w-full border-8 flex items-center justify-center rounded-3xl mb-8'>
						<h1 className='text-xl'>
							Your cart is empty. Keep shopping to find a course ...
						</h1>
					</div>
					{/* <div className='w-4/6 bg-blue-500 '>asdasd</div>
					<div className='w-2/6 bg-pink-300 h-[500px]'>
						<h1>Total</h1>
						<h1>B1,556</h1>
					</div> */}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default ShoppingCart;
