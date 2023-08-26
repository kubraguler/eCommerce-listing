import ProductList from "../../components/ProductList/ProductList";
import SideBar from "../../components/SideBar/SideBar";

import "./ListingPage.scss";

const ListingPage = ({ products }) => {
	return (
		<div className="listing-page">
			<SideBar />
			<ProductList products={products} />
		</div>
	);
};

export default ListingPage;
