import "../../styles/product.css";
import { Link } from "react-router-dom";

const Product = () => {
	return (
		<div className="product">
			<img
				src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
				alt="product name"
			/>
			<div className="product_info">
				<p className="product_name"></p>
				<p className="product_description">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Dolorum impedit ullam maiores quibusdam recusandae omnis
					fugit est quia optio id.
				</p>
				<p className="product_price">$499.99</p>
				<Link to={`/product/${1111}`} className="product_button">
					View
				</Link>
			</div>
		</div>
	);
};

export default Product;
