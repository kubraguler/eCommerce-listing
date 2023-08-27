import "./Pagination.scss";

const Pagination = ({
  page,
  totalPage,
	isPrevActive,
	isNextActive,
	onPrevClick,
	onNextClick
}) => {
	const handleNextClick = () => {
		onNextClick();
	};

	const handlePrevClick = () => {
		onPrevClick();
	};

	return (
		<div className="pagination">
			<button
				className="pagination-prev"
				onClick={handlePrevClick}
				disabled={!isPrevActive}
			>
				←
			</button>
			{page}/{totalPage}
			<button
				className="pagination-next"
				onClick={handleNextClick}
				disabled={!isNextActive}
			>
				→
			</button>
		</div>
	);
};

export default Pagination;
