import "../../styles/cart.css";
import CartItem from "../CartItem.jsx";

const Cart = () => {
	return (
		<div className="cart">
			<div className="cart_left">
				<h2>Shopping Cart</h2>
				<CartItem />
				<CartItem />
			</div>
			<div className="cart_right">
				<div className="cart_screen_info">
					<p>Subtotal: (0) items</p>
					<p>$499.99</p>
				</div>
				<div>
					<button>Proceed To Checkout</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
