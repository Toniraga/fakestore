import { cartActionTypes } from './cart.types'


export const addItem = (payload) => ({
	type: cartActionTypes.ADD_ITEM,
	payload,
});

export const subtractItem = (payload) => ({
	type: cartActionTypes.SUBTRACT_ITEM,
	payload,
});

export const clearCart = () => ({
	type: cartActionTypes.CLEAR_CART,
});

export const populateCart = (payload) => ({
	type: cartActionTypes.POPULATE_CART,
	payload,
});


export const removeItem = (payload) => ({
	type: cartActionTypes.REMOVE_ITEM,
	payload,
});
