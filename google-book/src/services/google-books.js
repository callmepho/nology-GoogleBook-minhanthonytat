export const getBooksBySearchTerm = async (seachTerm = "") => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${seachTerm}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch book search");
  }
  const data = await response.json();
  return data.items;
};
