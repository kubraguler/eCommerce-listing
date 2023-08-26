import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getProducts } from "./data/api.js";
import ProductList from "./components/ProductList/ProductList.js";
import ProductDetailPage from "./components/ProductDetailPage/ProductDetailPage.js";
import "./App.scss";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts()
			.then((data) => {
				setProducts(data.products);
			})
			.catch((err) => {
				console.log("Error: ", err);
			});
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<ProductList products={products} />} />
				<Route path="/products/:slug" element={<ProductDetailPage />} />
			</Routes>
		</div>
	);
}

export default App;
