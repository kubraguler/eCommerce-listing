import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
	let params = useParams();

	return (
		<p>
			<b>Product Detail - Slug:</b> {params.slug}
		</p>
	);
};

export default ProductDetailPage;
