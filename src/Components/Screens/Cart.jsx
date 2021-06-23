import "../../styles/cart.css";
import CartItem from "../CartItem.jsx";
import { useSelector, useDispatch } from "react-redux"; // Dispatch updates cart size and redispatches the cart
import { Link } from "react-router-dom";

// Actions
import { addToCart } from "../../Redux/Actions/cart";

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart); // Get cart state
	const { cartItems } = cart; // Destructor cartItems from cart state

	// Persists changes in cart quantity
	const quantityChangeHandler = (id, quantity) => {
		dispatch(addToCart(id, quantity));
	};
	return (
		<div className="cart">
			<div className="cart_left">
				<h2>Shopping Cart</h2>
				{cartItems.length === 0 ? (
					<div>
						Your cart is empty <Link to="/">Go Back</Link>
					</div>
				) : (
					cartItems.map((item) => (
						<CartItem item={item} quantityChangeHandler={quantityChangeHandler} />
					))
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
