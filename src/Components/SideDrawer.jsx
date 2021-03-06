import "../styles/sideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
	const sideDrawerClass = ["sideDrawer"]; // Set the className to an array

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
	};

	if (show) {
		sideDrawerClass.push("show"); // push style of "show" onto the class styling
	}

	return (
		<div className={sideDrawerClass.join(" ")}>
			<ul className="sideDrawer_links" onClick={click}>
				<li>
					<Link to="/cart">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart <span className="sideDrawer_cart_icon">{getCartCount()}</span>
						</span>
					</Link>
				</li>

				<li>
					<Link to="/">Shop</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;
