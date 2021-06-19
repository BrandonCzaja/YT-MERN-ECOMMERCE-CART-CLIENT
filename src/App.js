import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
