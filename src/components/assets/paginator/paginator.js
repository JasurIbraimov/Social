import React, { useState } from 'react';
import './paginator.scss';
const Paginator = ({
	totalCount,
	pageSize,
	setPage,
	currentPage,
	portionSize = 5,
}) => {
	const pages = [];
	const pageCount = Math.ceil(totalCount / pageSize);
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}
	const [portionNumber, setPortionNumber] = useState(1);
	const portionCount = Math.ceil(pageCount / portionSize);
	const leftPortionPosition = (portionNumber - 1) * pageSize + 1;
	const rightPortionPosition = portionNumber * pageSize;

	return (
		<div>
			<div>
				{portionNumber > 1 && (
					<button
						className='paginator paginator_nav'
						onClick={() => setPortionNumber(portionNumber - 1)}
					>
						Prev
					</button>
				)}
				{pages
					.filter((p) => p >= leftPortionPosition && p <= rightPortionPosition)
					.map((p) => {
						return (
							<button
								onClick={() => setPage(p)}
								key={p}
								className={currentPage === p ? `paginator active` : 'paginator'}
							>
								{p}
							</button>
						);
					})}
				{portionCount > portionNumber && (
					<button
						className='paginator paginator_nav'
						onClick={() => setPortionNumber(portionNumber + 1)}
					>
						Next
					</button>
				)}
			</div>
		</div>
	);
};

export default Paginator;
