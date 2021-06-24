import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "../src/Components/Navbar.jsx";
import Backdrop from "../src/Components/Backdrop.jsx";
import SideDrawer from "../src/Components/SideDrawer.jsx";

// Screens
import Home from "../src/Components/Screens/Home.jsx";
import Product from "../src/Components/Screens/Product.jsx";
import Cart from "../src/Components/Screens/Cart.jsx";

function App() {
	const [sideToggle, setSideToggle] = useState(false);

	return (
		<Router>
			<Navbar click={() => setSideToggle(true)} />
			<SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
			<Backdrop show={sideToggle} click={() => setSideToggle(false)} />
			<main className="app">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/product/:id" component={Product} />
					<Route exact path="/cart" component={Cart} />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
