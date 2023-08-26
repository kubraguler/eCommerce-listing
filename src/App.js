import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import data from "./data/data.json";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "./App.scss";

function App() {
	const products = data.item.products;
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<ProductCard products={products} />} />
				<Route path="/product-detail" element={<ProductDetail />} />
			</Routes>
		</div>
	);
}

export default App;
