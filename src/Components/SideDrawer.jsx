import "../styles/sideDrawer.css";

const SideDrawer = ({ show }) => {
	// Dynamic Styling
	const sideDrawerClass = ["sideDrawer"]; // Set the className to an array
	if (show) {
		sideDrawerClass.push("show"); // push style of "show" onto the class styling
	}

	return <div className={sideDrawerClass.join(" ")}></div>;
};

export default SideDrawer;
