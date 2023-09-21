export const getBooksBySearchTerm = async (seachTerm = "") => {
	const key = "AIzaSyBINqlWoas8k55XAAvtsGYD4z7FqwxkIQ0";
	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${seachTerm}&key=${key}`
	);
	if (!response.ok) {
		throw new Error("Failed to fetch book search");
	}
	const data = await response.json();
	return data.items;
};
