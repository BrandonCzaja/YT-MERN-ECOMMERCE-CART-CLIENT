import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./Reducers/cart";
// We will put all reducers here
const reducer = combineReducers({
	// Cart is now in the redux state dev tool in chrome
	cart: cartReducer
});

const middleware = [thunk]; // Helps make async requests (can't be done in redux without thunk)

// store takes a reducer, initial state, enhancer(composeWithDevTools in this case) and the enhancer takes the middleware array(spread the array to make adding additional values easier)
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
