import { createContext, useContext, useState } from 'react';
import * as cartApi from '../api/cartApi';

const CartContext = createContext();

function CartContextProvider({ children }) {
	const [slipImage, setSlipImage] = useState('');
	const [cartItems, setCartItems] = useState([]);

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
