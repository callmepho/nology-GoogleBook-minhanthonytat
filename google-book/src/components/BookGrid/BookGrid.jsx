import React from "react";
import Card from "../Card/Card";
import { getBooksBySearchTerm } from "../../services/google-books";
import { useState, useEffect } from "react";
import style from "./BookGrid.module.scss";

function BookGrid({ searchTerm }) {
	const [bookData, setBookData] = useState(null);
	const getBooks = () => {
		getBooksBySearchTerm(searchTerm)
			.then((books) => setBookData(books))
			.catch((e) => console.log(e));
	};
	useEffect(() => {
		getBooks();
		console.log(bookData);
	}, [searchTerm]);
	return (
		<div className={style.bookgrid}>
			{bookData !== null &&
				bookData.map((book, index) => (
					<Card
						key={`book-${index}`}
						imageLinks={book.volumeInfo.imageLinks?.thumbnail ?? ""}
						authors={book.volumeInfo.authors}
						title={book.volumeInfo.title}
						description={book.volumeInfo.description}
					/>
				))}
		</div>
	);
}

export default BookGrid;
