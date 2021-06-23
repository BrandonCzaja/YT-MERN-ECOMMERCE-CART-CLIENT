import "../../styles/product_screen.css";

const ProductScreen = () => {
	return (
		<div className="product_screen">
			<div className="product_screen_left">
				<div className="product_screen_left_img">
					<img
						src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
						alt="product"
					/>

					<div className="product_screen_left_info">
						<p className="left_name">Product 1</p>
						<p className="left_price">Price: $499.99</p>
						<p className="left_description">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Placeat, neque?
						</p>
					</div>
				</div>
			</div>
			<div className="product_screen_right">
				<div className="product_screen_right_info">
					<p>
						Price: <span>$499.99</span>
					</p>
					<p>
						Status: <span>In Stock</span>
					</p>
					<p>
						Quantity:
						<select>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</p>
					<p>
						<button type="button">Add to Cart</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductScreen;
