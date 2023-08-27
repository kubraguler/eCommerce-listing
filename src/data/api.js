export const getProducts = async (sortingOption, page = 1, perPage) => {
	const data = {
		query: "toilets",
		pageNumber: page,
		size: perPage,
		additionalPages: 0,
		sort: sortingOption || 1
	};

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	};

	const response = await fetch(
		`https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=${process.env.REACT_APP_API_KEY}`,
		options
	);
	return await response.json();
};
