import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./Reducers/cart";
import { getProductsReducer, getProductDetailsReducer } from "./Reducers/product";

// We will put all reducers here
const reducer = combineReducers({
	// These are now in the redux state dev tool in chrome
	cart: cartReducer,
	getProducts: getProductsReducer,
	getProductDetails: getProductDetailsReducer
});

const middleware = [thunk]; // Helps make async requests (can't be done in redux without thunk)

const cartFromLocalStorage = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: [];

//
const INITIAL_STATE = {
	cart: {
		cartItems: cartFromLocalStorage
	}
};

// store takes a reducer, initial state, enhancer(composeWithDevTools in this case) and the enhancer takes the middleware array(spread the array to make adding additional values easier)
const store = createStore(
	reducer,
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
