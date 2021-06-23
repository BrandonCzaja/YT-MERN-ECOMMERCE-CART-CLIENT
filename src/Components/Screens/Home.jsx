import "../../styles/home.css";
import { useEffect } from "react"; // Get products when the page loads
import { useSelector, useDispatch } from "react-redux"; //Easier way to work with map state in props

// Components
import ProductInfo from "../ProductInfo.jsx";

// Actions
import { getProducts as listProducts } from "../../Redux/Actions/product"; // Imported as listProducts to avoid variable name class

const Home = () => {
	const dispatch = useDispatch();

	// Get the getProducts data
	const getProducts = useSelector((state) => state.getProducts);

	// Destructor products array, loading, error from getProducts
	const { products, loading, error } = getProducts;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div className="home">
			<h2 className="home_screen_title">Latest Products</h2>
			<div className="home_screen_products">
				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
					<h2>{error}</h2>
				) : (
					products.map((product) => (
						<ProductInfo
							key={product._id}
							productId={product._id}
							name={product.name}
							price={product.price}
							description={product.description}
							imageUrl={product.imageUrl}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Home;
