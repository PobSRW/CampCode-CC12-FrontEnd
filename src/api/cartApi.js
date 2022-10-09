import axios from '../config/axios';

export const checkout = async (paymentData) => {
	await axios.post('/cart/checkout', paymentData);
};
