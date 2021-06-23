import "../../styles/cart.css";
import CartItem from "../CartItem.jsx";
import { useSelector, useDispatch } from "react-redux"; // Dispatch updates cart size and redispatches the cart
import { Link } from "react-router-dom";

// Actions
import { addToCart, removeFromCart } from "../../Redux/Actions/cart";

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart); // Get cart state
	const { cartItems } = cart; // Destructor cartItems from cart state

	// Persists changes in cart quantity
	const quantityChangeHandler = (id, quantity) => {
		dispatch(addToCart(id, quantity));
	};

	// Remove from Cart
	const removeHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	// Function to get the number of items in the cart
	const getCartCount = () => {
		return cartItems.reduce((quantity, item) => Number(item.quantity) + quantity, 0);
	};

	// Get Cart Price
	const getCartSubTotal = () => {
		return cartItems.reduce((price, item) => item.price * item.quantity + price, 0);
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
						<CartItem
							key={item.product}
							item={item}
							quantityChangeHandler={quantityChangeHandler}
							removeHandler={removeHandler}
						/>
					))
				)}
			</div>
			<div className="cart_right">
				<div className="cart_screen_info">
					<p>Subtotal: ({getCartCount()}) items</p>
					<p>${getCartSubTotal().toFixed(2)}</p>
				</div>
				<div>
					<button>Proceed To Checkout</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
