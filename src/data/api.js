export const getProducts = async () => {
	const data = {
		query: "toilets",
		pageNumber: 0,
		size: 0,
		additionalPages: 0,
		sort: 1
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
