import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

const ProductList = ({ products }) => {
	return (
		<div className="product-list">
			<main className="product-wrapper">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</main>
		</div>
	);
};

export default ProductList;
