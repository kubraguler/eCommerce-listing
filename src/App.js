import { Routes, Route } from "react-router-dom";
import ListingPage from "./pages/ListingPage/ListingPage.js";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage.js";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<ListingPage />} />
				<Route path="/products/:slug" element={<ProductDetailPage />} />
			</Routes>
		</div>
	);
}

export default App;
