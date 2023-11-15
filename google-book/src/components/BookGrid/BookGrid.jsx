import React from "react";
import Card from "../Card/Card";
import { getBooksBySearchTerm } from "../../services/google-books";
import { useState, useEffect } from "react";
import style from "./BookGrid.module.scss";
import PopOutCard from "../PopOutCard/PopOutCard";

function BookGrid({ booksData }) {
	const [activeBook, setActiveBook] = useState(null);
	const [isActive, setIsActive] = useState(false);
	const bookData = booksData.items;
	return (
		<div className={style.bookgrid}>
			{bookData &&
				bookData.map((book, index) => (
					<Card
						key={`book-${index}`}
						bookData={book}
						imageLinks={
							book.volumeInfo?.imageLinks?.thumbnail ??
							"./src/assets/image-unavailable.png"
						}
						authors={book.volumeInfo.authors?.join(", ") ?? "-"}
						title={book.volumeInfo.title}
						setActiveBook={setActiveBook}
						isActive={isActive}
						setIsActive={setIsActive}
					/>
				))}
			{isActive && (
				<PopOutCard activeBook={activeBook} setIsActive={setIsActive} />
			)}
		</div>
	);
}

export default BookGrid;
