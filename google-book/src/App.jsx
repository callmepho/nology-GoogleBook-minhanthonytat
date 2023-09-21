import { useState } from "react";
import Search from "./components/Search/Search";
import BookGrid from "./components/BookGrid/BookGrid";

function App() {
	const [searchTerm, setSearchTerm] = useState(null);

	const handleSubmit = (value) => {
		setSearchTerm(value);
	};

	return (
		<>
			<Search handleSubmit={handleSubmit} />
			{searchTerm != null && <BookGrid searchTerm={searchTerm} />}
		</>
	);
}

export default App;
