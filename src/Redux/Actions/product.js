// This is used to dispatch data from the database

import * as actionTypes from "../Constants/product";
import axios from "axios";

// getProducts fires when we go to the Home Page
// Make a request to the backend to get all products form the database
export const getProducts = () => async (dispatch) => {
	try {
		// Make the initial request to the backend
		dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST }); // Loading would be set to true

		// Destructor data (which will be all products) from the request
		const { data } = await axios.get("/api/products"); // HTTP Request

		dispatch({
			type: actionTypes.GET_PRODUCTS_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCTS_FAIL,
			// Check if the error has a response and data.message. If it does return the error response and data message. Otherwise (else) send the message
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

// HTTP Request to get the product details of a specific product by id
export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/products/${id}`); // HTTP Request

		dispatch({
			type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCTS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

// Remove Product
export const removeProductDetails = () => (dispatch) => {
	dispatch({
		type: actionTypes.GET_PRODUCT_DETAILS_RESET
	});
};
