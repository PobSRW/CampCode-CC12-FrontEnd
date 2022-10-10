import axios from '../config/axios';

export const checkout = async (paymentData) =>
	await axios.post('/cart/checkout', paymentData);

export const getConfirmOrder = async () =>
	await axios.get('/cart/confirmorder');

export const updateOrderStatus = async (orderId) =>
	await axios.patch('/cart/updatepaymentstatus', { orderId });

export const bindingUserCourse = async (userId, courses) =>
	await axios.post('/cart/bindingcourse', { userId, courses });
