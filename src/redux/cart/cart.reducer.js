import { cartActionTypes } from './cart.types';
import { addItem, subtractItem } from "./cart.utils";

const INITIAL_STATE = {
	cartItems: [],
	subTotal: 0,
	tax: 0,
	savedCart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartActionTypes.POPULATE_CART:
			return {
				...state,
				cartItems: action.payload,
			};

		case cartActionTypes.ADD_ITEM:
			const newCartItem = addItem(state.savedCart, action.payload);
			return {
				...state,
				savedCart: [...newCartItem],
			};

		case cartActionTypes.SUBTRACT_ITEM:
			const newCart = subtractItem(state.savedCart, action.payload);
			return {
				...state,
				savedCart: [...newCart],
			};

		case cartActionTypes.REMOVE_ITEM:
			const filteredCart = state.savedCart.filter(
				(item) => item.id !== action.payload
			);
			return { ...state, savedCart: [...filteredCart] };

		case cartActionTypes.CLEAR_CART:
			return { ...state, savedCart: [] };

		default:
			return state;
	}
};

export default cartReducer;
