import "../styles/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="navbar">
			{/* logo */}
			<div className="navbar_logo">
				<h2>MERN Shopping Cart</h2>
			</div>
			{/* links */}
			<ul className="navbar-links">
				<li>
					<Link to="/cart">
						{/* Icon */}
						Cart
						<span className="cart_icon_badge">0</span>
					</Link>
				</li>
				<li>
					<Link to="/">Shop</Link>
				</li>
			</ul>
			{/* hamburger menu */}
			<div className="hamburger_menu">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
};

export default Navbar;
