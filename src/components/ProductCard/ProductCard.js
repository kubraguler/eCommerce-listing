import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ products }) => {
	return (
		<div className="product-list">
			<main className="product-wrapper">
				{products.map((product) => (
					<article className="product" key={product.id}>
						<img
							className="product-img"
							src={product.image?.url}
							alt={product.image.attributes?.imageAltText}
						/>
						<div className="product-content">
							<Link to={`/products${product.slug}`}>
								<p className="product-name">{product.productName}</p>
							</Link>
							<p className="product-price">
								<span className="product-currency">
									{product.price?.currencyCode}
								</span>
								{product.price?.priceIncTax}
							</p>
						</div>
					</article>
				))}
			</main>
		</div>
	);
};

export default ProductCard;
