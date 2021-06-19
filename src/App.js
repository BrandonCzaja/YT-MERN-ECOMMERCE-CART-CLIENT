import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import Home from "../src/Components/Screens/Home.jsx";
import Product from "../src/Components/Screens/Product.jsx";
import Cart from "../src/Components/Screens/Cart.jsx";

// Components
import Navbar from "../src/Components/Navbar.jsx";
import Backdrop from "../src/Components/Backdrop.jsx";

function App() {
	return (
		<Router>
			<Navbar />
			{/* SideDrawer */}
			<Backdrop />
			<main>
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
