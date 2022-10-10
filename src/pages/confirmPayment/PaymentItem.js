import OrderItem from './OrderItem';
import { useCartContext } from '../../context/cartContext';

function PaymentItem({ order }) {
	const { updateOrderStatus, fetchOrders, bindingUserCourse } =
		useCartContext();

	// console.log(order);

	const totalCoursePrice = order.OrderItems.reduce(
		(acc, item) => acc + item.priceHistory,
		0
	);

	const handleSubmitConfirmOrder = async () => {
		// console.log(order.User.id);
		// console.log(order.OrderItems);
		await updateOrderStatus(order.id);

		await bindingUserCourse(order.User.id, order.OrderItems);
		await fetchOrders();
	};

	return (
		<div className='flex mb-5 bg-stone-200 border-[6px] border-black rounded-xl'>
			<div className=' mb-4  pl-5 pt-3 font-bold w-5/6 mr-5'>
				<h1>Order ID : {order.id}</h1>
				<h1>
					Customer :{' '}
					<span className='font-black'>
						{order.User.firstName} {order.User.lastName}
					</span>
				</h1>
				<h1>Customer ID : {order.userId}</h1>
				<h1>
					Status : <span className='text-red-500'>{order.status}</span>
				</h1>
				<h1 className='mb-2'>Order Courses :</h1>
				<div>
					{order.OrderItems?.map((orderItems, index) => {
						return (
							<div className='flex ml-14 p-1' key={orderItems.id}>
								<h1>{index + 1}.</h1>
								<OrderItem orderItems={orderItems} />
							</div>
						);
					})}
				</div>
				<h1 className=''>
					Total Price :{' '}
					<span className='text-green-500 '>{totalCoursePrice}</span> Baht
				</h1>
				<h1>Transfer Slip : </h1>
			</div>
			<div className='w-1/6  mb-4 flex items-center mr-8 '>
				<button
					className='bg-amber-400 h-[80px] w-full text-lg font-bold rounded-lg'
					onClick={handleSubmitConfirmOrder}
				>
					Confirm Order
				</button>
			</div>
		</div>
	);
}

export default PaymentItem;
