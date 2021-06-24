import "../../styles/product_screen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getProductDetails } from "../../Redux/Actions/product";
import { addToCart } from "../../Redux/Actions/cart";

// Match: Lets me grab the url params History: Allows me to push items to the cart url endpoint
const ProductScreen = ({ match, history }) => {
	// Set quantity state to adjust the quantity field
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	// Grab state of my product details
	const productDetails = useSelector((state) => state.getProductDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		// If the product is in state and the params id !== the product id in state
		if (product && match.params.id !== product._id) {
			// Pass the dispatch function the matched id: It will give the actual product we want
			dispatch(getProductDetails(match.params.id));
		}
	}, [dispatch, match, product]);

	const addToCartHandler = () => {
		dispatch(addToCart(product._id, quantity)); // Quantity comes from the state.
		history.push("/cart"); // Push to url endpoint
	};

	return (
		<div className="product_screen">
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h2>{error}</h2>
			) : (
				<>
					<div className="product_screen_left">
						<div className="product_screen_left_img">
							<img src={product.imageUrl} alt={product.name} />
						</div>

						<div className="product_screen_left_info">
							<p className="left_name">{product.name}</p>
							<p className="left_price">{product.price}</p>
							<p className="left_description">{product.description}</p>
						</div>
					</div>

					<div className="product_screen_right">
						<div className="product_screen_right_info">
							<p>
								Price: <span>{product.price}</span>
							</p>
							<p>
								Status:
								<span>
									{product.countInStock > 0 ? "In Stock" : "Out of Stock"}
								</span>
							</p>
							<p>
								Quantity:
								<select
									value={quantity}
									onChange={(e) => setQuantity(e.target.value)}>
									{[...Array(product.countInStock).keys()].map((x) => (
										<option value={x + 1} key={x + 1}>
											{x + 1}
										</option>
									))}
								</select>
							</p>
							<p>
								<button type="button" onClick={addToCartHandler}>
									Add to Cart
								</button>
							</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ProductScreen;
