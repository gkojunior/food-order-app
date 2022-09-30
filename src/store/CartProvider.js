import CartContext from './card-context';

export default function CartProvider({ children }) {
	const addItemToCartHandler = (item) => {};

	const removeItemFromCartHandler = (id) => {};
	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}
