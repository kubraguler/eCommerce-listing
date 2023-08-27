import { useEffect, useState } from "react";
import { getProducts } from "../../data/api.js";
import Sorting, { SortingOptions } from "../../components/Sorting/Sorting.js";
import SideBar from "../../components/SideBar/SideBar";
import ProductList from "../../components/ProductList/ProductList";

import "./ListingPage.scss";

const ListingPage = () => {
	const [products, setProducts] = useState([]);
	const [selectedSorting, setSelectedSorting] = useState(SortingOptions.Recommended);

	useEffect(() => {
		getProducts(selectedSorting)
			.then((data) => {
				setProducts([...data.products]);
			})
			.catch((err) => {
				console.log("Error: ", err);
			});
	}, [selectedSorting]);

	const handleSortingValueChange = (newValue) => {
		setSelectedSorting(newValue);
	};

	return (
		<div className="listing-page">
			<Sorting onValueChange={handleSortingValueChange} />
			<SideBar />
			<ProductList products={products} />
		</div>
	);
};

export default ListingPage;
