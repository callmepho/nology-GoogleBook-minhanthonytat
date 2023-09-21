export const getBooksBySearchTerm = async (searchTerm = "") => {
  if (searchTerm === "") {
    throw new Error("Search must have a value");
  }

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch book search");
  }
  const data = await response.json();
  if (data.totalItems.length === 0) {
    throw new Error("No books found for search " + searchTerm);
  }
  return data.items;
};
