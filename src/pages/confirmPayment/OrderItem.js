import React from 'react';

function OrderItem({ orderItems }) {
	return (
		<div>
			<h1>{orderItems.Course.courseName}</h1>
			<h1 className='text-blue-600'>
				{' '}
				Course Price : {orderItems.priceHistory}
			</h1>
		</div>
	);
}

export default OrderItem;
