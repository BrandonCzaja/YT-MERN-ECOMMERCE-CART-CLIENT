import "../styles/cartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
	return (
		<div className="cart_item">
			<div className="cart_item_img">
				<img src={item.imageUrl} alt={item.name} />
				<Link to={`/product/${item.product}`} className="cart_item_name">
					<p>{item.name}</p>
				</Link>

				<p className="cart_item_price">${item.price}</p>
				<select
					className="cart_item_select"
					value={item.quantity}
					onChange={() => console.log("something")}>
					{[...Array(item.countInStock).keys()].map((x) => (
						<option key={x + 1} value={x + 1}>
							{x + 1}
						</option>
					))}
				</select>

				<button className="cart_item_delete_button">
					<i className="fas fa-trash"></i>
				</button>
			</div>
		</div>
	);
};

export default CartItem;
