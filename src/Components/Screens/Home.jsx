import "../../styles/home.css";
import Product from "../Screens/Product.jsx";

const Home = () => {
	return (
		<div className="home">
			<h2 className="home_screen_title">Latest Products</h2>
			<div className="home_screen_products">
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
};

export default Home;
