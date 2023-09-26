export const getBooksBySearchTerm = async (
	searchTerm = "",
	maxResults = 10,
	pageIndex = 0
) => {
	if (searchTerm === "") {
		throw new Error("Search must have a value");
	}
	console.log(searchTerm, maxResults, pageIndex);
	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${maxResults}&startIndex=${pageIndex}&key=AIzaSyAYhxAm1FpKGfNMCX-5dm7_YyXT9fiNhmU`
	);
	if (!response.ok) {
		throw new Error("Failed to fetch book search");
	}
	const data = await response.json();
	if (data.totalItems.length === 0) {
		throw new Error("No books found for search " + searchTerm);
	}
	return data;
};
