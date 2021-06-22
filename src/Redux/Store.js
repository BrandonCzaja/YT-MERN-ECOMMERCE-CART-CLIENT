import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// We will put all reducers here
const reducer = combineReducers({});

const middleware = [thunk]; // Helps make async requests (can't be done in redux without thunk)

// store takes a reducer, initial state, enhancer(composeWithDevTools in this case) and the enhancer takes the middleware array
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
