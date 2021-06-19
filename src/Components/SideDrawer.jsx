import "../styles/sideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = ({ show, click }) => {
	// Dynamic Styling
	const sideDrawerClass = ["sideDrawer"]; // Set the className to an array
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
							Cart <span className="sideDrawer_cart_icon">0</span>
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
