import { useParams } from "react-router-dom";

const ProductDetail = () => {
	let params = useParams();

	return (
		<p>
			<b>ProductDetail - Slug:</b> {params.slug}
		</p>
	);
};

export default ProductDetail;
