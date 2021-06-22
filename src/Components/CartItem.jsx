import "../styles/cartItem.css";
import { Link } from "react-router-dom";

function CartItem() {
	return (
		<div className="cart_item">
			<div className="cart_item_img">
				<img
					src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
					alt="item image"
				/>
				<Link to={`/product/${11}`} className="cart_item_name">
					<p>Product 1</p>
				</Link>

				<p className="cart_item_price">$499.99</p>
				<select className="cart_item_select">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select>

				<button className="cart_item_delete_button">
					<i className="fas fa-trash"></i>
				</button>
			</div>
		</div>
	);
}

export default CartItem;
