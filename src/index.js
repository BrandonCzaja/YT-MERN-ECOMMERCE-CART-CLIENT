import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Provides the entire application with the state of our Redux Store
import { Provider } from "react-redux";
import store from "./Redux/Store.js"; // Import Redux store to give the application access to the Redux Store

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
