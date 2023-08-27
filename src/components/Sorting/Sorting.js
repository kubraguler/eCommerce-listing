import { useState } from "react";

export const SortingOptions = {
	Recommended: 1,
	Lowest: 2,
	Highest: 3,
	LargestDiscount: 4
};

const Sorting = ({ onValueChange }) => {
	const [value, setValue] = useState(SortingOptions.Recommended);

	const handleSelectChange = (e) => {
		const newValue = e.target.value;
		setValue(newValue);
		onValueChange(newValue);
	};

	return (
		<div>
			<label>
				Sort By
				<select value={value} onChange={handleSelectChange}>
					<option value={SortingOptions.Recommended}>Recommended</option>
					<option value={SortingOptions.Lowest}>Lowest Price</option>
					<option value={SortingOptions.Highest}>Highest Price</option>
					<option value={SortingOptions.LargestDiscount}>Highest Discount</option>
				</select>
			</label>
		</div>
	);
};

export default Sorting;
