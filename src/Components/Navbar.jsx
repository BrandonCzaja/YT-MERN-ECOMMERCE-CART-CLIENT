import "../styles/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="navbar">
			{/* logo */}
			<div className="navbar_logo">
				<Link to="/">
					<h2>MERN Shopping Cart</h2>
				</Link>
			</div>
			{/* links */}
			<ul className="navbar_links">
				<li>
					<Link to="/cart" className="cart_link">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart
							<span className="cart_icon_badge">0</span>
						</span>
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
