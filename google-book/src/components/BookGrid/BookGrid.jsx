import React from "react";
import Card from "../Card/Card";
import { getBooksBySearchTerm } from "../../services/google-books";
import { useState, useEffect } from "react";
import style from "./BookGrid.module.scss";
import PopOutCard from "../PopOutCard/PopOutCard";

function BookGrid({ booksData }) {
  const [activeBook, setActiveBook] = useState([]);
  return (
    <div className={style.bookgrid}>
      {booksData &&
        booksData.map((book, index) => (
          <Card
            key={`book-${index}`}
            imageLinks={
              book.volumeInfo?.imageLinks?.thumbnail ??
              "./src/assets/image-unavailable.png"
            }
            authors={book.volumeInfo.authors?.join(", ") ?? "-"}
            title={book.volumeInfo.title}
            description={book.volumeInfo.description ?? "-"}
            setActiveBook={setActiveBook}
          />
        ))}
      <PopOutCard activeBook={activeBook} />
    </div>
  );
}

export default BookGrid;
