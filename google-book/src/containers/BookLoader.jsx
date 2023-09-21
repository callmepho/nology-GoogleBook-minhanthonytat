import React from "react";
import { useState, useEffect } from "react";
import { getBooksBySearchTerm } from "../services/google-books";
import BookGrid from "../components/BookGrid/BookGrid";

function BookLoader({ searchTerm, setActiveId }) {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm === null) {
      return;
    }

    setLoading(true);
    setError(null);
    setBooksData([]);
    getBooksBySearchTerm(searchTerm)
      .then((data) => setBooksData(data))
      .catch((e) => setError(e))
      .finally(() => {
        setLoading(false);
        console.log(booksData);
      });
  }, [searchTerm]);
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error.message}</p>}
      {!loading && <BookGrid booksData={booksData} setActiveId={setActiveId} />}
    </>
  );
}

export default BookLoader;
