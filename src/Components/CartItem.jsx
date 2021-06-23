import "../styles/cartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, quantityChangeHandler, removeHandler }) => {
	return (
		<div className="cart_item">
			<div className="cart_item_img">
				<img src={item.imageUrl} alt={item.name} />
				<Link to={`/product/${item.product}`} className="cart_item_name">
					<p>{item.name}</p>
				</Link>

				<p className="cart_item_price">${item.price}</p>
				{/* quantityChangeHandler persists changes in cart quantity */}
				<select
					className="cart_item_select"
					value={item.quantity}
					onChange={(e) => quantityChangeHandler(item.product, e.target.value)}>
					{[...Array(item.countInStock).keys()].map((x) => (
						<option key={x + 1} value={x + 1}>
							{x + 1}
						</option>
					))}
				</select>

				<button
					className="cart_item_delete_button"
					onClick={() => removeHandler(item.product)}>
					<i className="fas fa-trash"></i>
				</button>
			</div>
		</div>
	);
};

export default CartItem;
