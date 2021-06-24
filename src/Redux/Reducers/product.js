import * as actionTypes from "../Constants/product";

// Get all products for Home Page
export const getProductsReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS_REQUEST:
			return {
				loading: true,
				products: []
			};

		case actionTypes.GET_PRODUCTS_SUCCESS:
			return {
				products: action.payload, // comes from backend
				loading: false
			};

		case actionTypes.GET_PRODUCTS_FAIL:
			return {
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
			return {
				loading: true
			};

		case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
			return {
				loading: false,
				product: action.payload // Comes from backend
			};

		case actionTypes.GET_PRODUCT_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload
			};

		case actionTypes.GET_PRODUCT_DETAILS_RESET:
			return {
				product: {}
			};

		default:
			return state;
	}
};
