import { useEffect, useState } from "react";
import { getProducts } from "../../data/api.js";
import Sorting, { SortingOptions } from "../../components/Sorting/Sorting.js";
import SideBar from "../../components/SideBar/SideBar";
import ProductList from "../../components/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination.js";
import "./ListingPage.scss";

const ListingPage = () => {
	const [products, setProducts] = useState([]);
	const [selectedSorting, setSelectedSorting] = useState(
		SortingOptions.Recommended
	);

	const perPage = 30;
	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(0);
	const [isPrevActive, setIsPrevActive] = useState(false);
	const [isNextActive, setIsNextActive] = useState(true);

	useEffect(() => {
		getProducts(selectedSorting, page, perPage)
			.then((data) => {
				setProducts([...data.products]);

				const page = parseInt(data.pagination.from / perPage) + 1;
				const total = Math.ceil(data.pagination.total / perPage);
				setPage(page);
				setTotalPage(total);

				setIsPrevActive(data.pagination.from !== 0);
				setIsNextActive(page < total);
			})
			.catch((err) => {
				console.log("Error: ", err);
			});
	}, [selectedSorting, page]);

	const handleSortingValueChange = (newValue) => {
		setSelectedSorting(newValue);
	};

	const handleNextClick = () => {
		setPage(page + 1);
	};

	const handlePrevClick = () => {
		setPage(page - 1);
	};

	return (
		<div className="listing-page">
			<Sorting onValueChange={handleSortingValueChange} />
			<div className="main-wrapper">
				<SideBar />
				<ProductList products={products} />
			</div>
			<Pagination
				page={page}
				totalPage={totalPage}
				isPrevActive={isPrevActive}
				isNextActive={isNextActive}
				onPrevClick={handlePrevClick}
				onNextClick={handleNextClick}
			/>
		</div>
	);
};

export default ListingPage;
