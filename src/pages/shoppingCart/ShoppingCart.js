import Footer from '../footer/Footer';
import CartItem from './CartItem';
import { useCartContext } from '../../context/cartContext';

function ShoppingCart() {
	const { cartItems } = useCartContext();

	const totalprice = cartItems.reduce((acc, item) => acc + item.price, 0);

	return (
		<>
			<div className='px-[200px] my-6'>
				<h1 className='text-7xl'>Shopping Cart</h1>

				<div className='flex flex-col mt-10 justify-center '>
					{!cartItems.length ? (
						<div className='h-[500px] w-full border-8 flex items-center justify-center rounded-3xl mb-8 '>
							<h1 className='text-xl'>
								Your cart is empty. Keep shopping to find a course ...
							</h1>
						</div>
					) : (
						<>
							{cartItems.map((cartItem) => (
								<CartItem
									courseName={cartItem.courseName}
									key={cartItem.id}
									id={cartItem.id}
									description={cartItem.description}
									price={cartItem.price}
									instructorFirstName={cartItem.instructorFirstName}
									instructorLastName={cartItem.instructorLastName}
									image={cartItem.image}
								/>
							))}
							<div className='flex justify-end'>
								<div className=' w-[390px] h-[180px] rounded-3xl bg-stone-200 '>
									<div className='mt-5 px-5'>
										<h1 className=' text-4xl font-bold '>
											Subtotal : {totalprice} Baht
										</h1>
										<h2>Included taxes</h2>
									</div>
									<div className='flex justify-center '>
										<button className='bg-blue-400 w-[350px] h-[40px] rounded-2xl text-2xl font-bold text-gray-100 mt-6'>
											Check Out
										</button>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default ShoppingCart;
