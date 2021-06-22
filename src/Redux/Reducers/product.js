import * as actionTypes from "../Constants/product";

// Get all products for Home Page
export const getProductsReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS_REQUEST:
			return {
				loading: true,
				products: []
			};
			break;

		case actionTypes.GET_PRODUCTS_SUCCESS:
			return {
				loading: false,
				products: action.payload // Comes from backend
			};
			break;

		case actionTypes.GET_PRODUCTS_FAIL:
			return {
				loading: false,
				error: action.payload
			};
			break;

		default:
			return state;
	}
};

export const getProductDetailsReducer = (state = { products: {} }, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
			return {
				loading: true
			};
			break;

		case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
			return {
				loading: false,
				product: action.payload // Comes from backend
			};
			break;

		case actionTypes.GET_PRODUCT_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload
			};
			break;

		case actionTypes.GET_PRODUCT_DETAILS_RESET:
			return {
				product: {}
			};
			break;

		default:
			return state;
	}
};
