import "../../styles/cart.css";
import CartItem from "../CartItem.jsx";
import { useSelector, useDispatch } from "react-redux"; // Dispatch updates cart size and redispatches the cart
import { Link } from "react-router-dom";

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart); // Get cart state
	const { cartItems } = cart; // Destructor cartItems from cart state

	return (
		<div className="cart">
			<div className="cart_left">
				<h2>Shopping Cart</h2>
				{cartItems.length === 0 ? (
					<div>
						Your cart is empty <Link to="/">Go Back</Link>
					</div>
				) : (
					cartItems.map((item) => <CartItem item={item} />)
				)}
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
