import { createContext, useContext, useEffect, useState } from 'react';
import * as cartApi from '../api/cartApi';
import { useAuthContext } from './authContext';

const CartContext = createContext();

function CartContextProvider({ children }) {
	const { isAdmin } = useAuthContext();
	const [slipImage, setSlipImage] = useState('');
	const [cartItems, setCartItems] = useState([]);
	const [orders, setOrders] = useState('');

	const addItemToCart = (data) => {
		setCartItems((prev) => [...prev, data]);
	};

	const removeCartItem = (courseId) => {
		const cartItemFilter = cartItems.filter((item) => item.id !== courseId);
		setCartItems(cartItemFilter);
	};

	const totalprice = cartItems.reduce((acc, item) => acc + item.price, 0);

	const checkout = async (paymentData) => {
		await cartApi.checkout(paymentData);
	};

	const fetchOrders = async () => {
		try {
			const res = await cartApi.getConfirmOrder();
			// console.log(res.data.order);

			setOrders(res.data.order);
		} catch (err) {
			console.log('Fetch Orders Error');
		}
	};

	const updateOrderStatus = async (orderId) => {
		try {
			await cartApi.updateOrderStatus(orderId);
		} catch (err) {
			console.log('Update OrderStatus Error');
		}
	};

	const bindingUserCourse = async (userId, courses) => {
		try {
			await cartApi.bindingUserCourse(userId, courses);
		} catch (err) {
			console.log('Update bindingUserCourse Error');
		}
	};

	useEffect(() => {
		if (isAdmin) {
			fetchOrders();
		}
	}, [isAdmin]);

	return (
		<CartContext.Provider
			value={{
				addItemToCart,
				cartItems,
				setCartItems,
				removeCartItem,
				totalprice,
				checkout,
				setSlipImage,
				slipImage,
				orders,
				updateOrderStatus,
				fetchOrders,
				bindingUserCourse,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export const useCartContext = () => {
	return useContext(CartContext);
};

export default CartContextProvider;
