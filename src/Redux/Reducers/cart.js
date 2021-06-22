import * as actionTypes from "../Constants/cart.js";
// To see what the * is type: <actionTypes.> and all the constants I made will show up

// cartReducer takes in an initial state(which I set), and an action
export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const item = action.payload;
			const existItem = state.cartItems.find(
				(x) => x.product === item.product
			);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product ? item : x
					)
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item]
				};
			}
			break;

		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(x) => x.product !== action.payload
				)
			};

		default:
			return state;
	}
};
