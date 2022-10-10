import PaymentItem from './PaymentItem';
import { useCartContext } from '../../context/cartContext';

function ConfirmPayment() {
	const { orders } = useCartContext();

	return (
		<div className='px-[300px] py-[50px]'>
			<div className='font-black text-5xl mb-5'>Confirm Payment</div>

			{(orders || []).map((order) => (
				<PaymentItem key={order.id} order={order} />
			))}
		</div>
	);
}

export default ConfirmPayment;
