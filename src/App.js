import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Components/Screens/Home.jsx";
import Product from "../src/Components/Screens/Product.jsx";
import Cart from "../src/Components/Screens/Cart.jsx";

function App() {
	return (
		<Router>
			{/* Navbar */}
			{/* SideDrawer */}
			{/* Backdrop */}
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/product/:id" component={Product} />
					<Route exact path="/cart" component={Cart} />
				</Switch>
			</main>
			<h1>Hello World</h1>
		</Router>
	);
}

export default App;
