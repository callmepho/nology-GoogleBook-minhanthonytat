import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.scss";
const Pagination = ({ booksData, searchData, pageIndex, setPageIndex }) => {
	const nextPage = () => {
		setPageIndex(pageIndex + parseInt(searchData.searchLimit));
	};
	const prevPage = () => {
		if (pageIndex > 1) {
			setPageIndex(pageIndex - parseInt(searchData.searchLimit));
		}
	};
	return (
		<div>
			{pageIndex - parseInt(searchData?.searchLimit) >= 0 && (
				<button className={styles.btn} onClick={() => prevPage()}>
					Prev Page
				</button>
			)}
			{pageIndex + parseInt(searchData?.searchLimit) < booksData.totalItems && (
				<button className={styles.btn} onClick={() => nextPage()}>
					Next Page
				</button>
			)}
		</div>
	);
};

export default Pagination;
