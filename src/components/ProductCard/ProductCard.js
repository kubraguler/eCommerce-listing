import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
	return (
		<article className="product">
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
	);
};

export default ProductCard;
