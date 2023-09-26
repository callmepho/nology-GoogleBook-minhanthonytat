import React from "react";
import { useState, useEffect } from "react";
import { getBooksBySearchTerm } from "../services/google-books";
import BookGrid from "../components/BookGrid/BookGrid";
import Pagination from "../components/Pagination/Pagination";
import styles from "./BookLoader.module.scss";

function BookLoader({ searchData, setActiveId }) {
	const [booksData, setBooksData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [pageIndex, setPageIndex] = useState(0);
	useEffect(() => {
		setPageIndex(0);
	}, [searchData]);

	useEffect(() => {
		if (searchData === null) {
			return;
		}
		const { inputValue: searchTerm, searchLimit: limit } = searchData;
		setLoading(true);
		setError(null);
		setBooksData([]);
		getBooksBySearchTerm(searchTerm, limit, pageIndex)
			.then((data) => setBooksData(data))
			.catch((e) => setError(e))
			.finally(() => {
				setLoading(false);
				console.log(booksData);
			});
	}, [searchData, pageIndex]);

	return (
		<>
			<div className={styles.container}>
				{loading && <p>Loading...</p>}
				{!loading && error && <p>{error.message}</p>}
				{!loading && (
					<BookGrid booksData={booksData} setActiveId={setActiveId} />
				)}
				<Pagination
					booksData={booksData}
					searchData={searchData}
					pageIndex={pageIndex}
					setPageIndex={setPageIndex}
				/>
			</div>
		</>
	);
}

export default BookLoader;
