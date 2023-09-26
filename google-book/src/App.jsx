import { useState } from "react";
import Search from "./components/Search/Search";
import BookLoader from "./containers/BookLoader";
import style from "./App.module.scss";
import PopOutCard from "./components/PopOutCard/PopOutCard";

function App() {
	const [searchData, setSearchData] = useState(null);

	const handleSubmit = (value) => {
		setSearchData(value);
		console.log(value);
	};

	return (
		<>
			<h1>Google Book Search</h1>
			<hr></hr>

			<Search handleSubmit={handleSubmit} />
			<div className={style.container}>
				<BookLoader searchData={searchData} />
			</div>
		</>
	);
}

export default App;
