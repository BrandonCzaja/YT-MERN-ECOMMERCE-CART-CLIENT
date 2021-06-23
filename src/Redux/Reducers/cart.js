import * as actionTypes from "../Constants/cart.js";
// To see what the * is type: <actionTypes.> and all the constants I made will show up

const CART_INITIAL_STATE = {
	cartItems: []
};

// cartReducer takes in an initial state(which I set), and an action
export const cartReducer = (state = CART_INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const item = action.payload; // The item we want to add to the cart
			// Check if this item already exists in the cart (checking by product id)
			const existItem = state.cartItems.find(
				(x) => x.product === item.product
			);

			// If the item exists in the cart
			if (existItem) {
				return {
					...state,
					// Map the cartItems array => if the current item in the array equals the existing item that was found, set it to that item. If it is not found, set new array(from map) item to the current array item in state

					// Basically this is just updating the state of the cartItems array to make sure that the action.payload is in there. If it is not (else) add the action.payload item to the cart
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product ? item : x
					)
				};
			} else {
				// Otherwise add the new item to the cartItems array and state
				return {
					...state,
					cartItems: [...state.cartItems, item]
				};
			}

		// Remove the item (by id) from the array and state using filter
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
