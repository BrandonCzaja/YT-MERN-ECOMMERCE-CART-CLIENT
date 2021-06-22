// HTTP Requests to backend

import * as actionTypes from "../Constants/cart";
import axios from "axios";

// The async(dispatch) comes from redux thunk
export const addToCart = (id, quantity) => async (dispatch, getState) => {
	// The route ${id} is coming from the Backend Controllers productRoutes file: router.get("/:id", getProductById)
	const { data } = await axios.get(`/api/products/${id}`); // Data is the data that comes from the axios get request

	// The payload fields come from the backend data file, except for the quantity field. That comes from the addToCart function above
	dispatch({
		type: actionTypes.ADD_TO_CART,
		payload: {
			product: data._id,
			name: data.name,
			imageUrl: data.imageUrl,
			price: data.price,
			countInStock: data.countInStock,
			quantity
		}
	});
	// Save cart to local storage
	localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

// Remove items from the cart
export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: actionTypes.REMOVE_FROM_CART,
		payload: id
	});

	localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
