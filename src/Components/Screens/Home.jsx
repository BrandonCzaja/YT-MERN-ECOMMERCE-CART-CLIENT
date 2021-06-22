import "../../styles/home.css";
import Product_Info from "../Product_Info.jsx";

const Home = () => {
	return (
		<div className="home">
			<h2 className="home_screen_title">Latest Products</h2>
			<div className="home_screen_products">
				<Product_Info />
				<Product_Info />
				<Product_Info />
				<Product_Info />
				<Product_Info />
				<Product_Info />
			</div>
		</div>
	);
};

export default Home;
