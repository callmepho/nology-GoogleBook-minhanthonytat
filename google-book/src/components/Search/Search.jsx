import React from "react";
import { useState } from "react";
import style from "./Search.module.scss";

function Search({ handleSubmit }) {
	const [inputValue, setInputValue] = useState("");
	const [searchLimit, setSearchLimit] = useState("10");
	const formSubmit = (e) => {
		e.preventDefault();
		const submitted = { inputValue, searchLimit };
		handleSubmit(submitted);
	};

	return (
		<form className={style.search} onSubmit={formSubmit}>
			<input
				className={style.search_input}
				onChange={(e) => setInputValue(e.target.value)}
				type="text"
				placeholder="search"
				value={inputValue}></input>
			<select
				value={searchLimit}
				onChange={(e) => setSearchLimit(e.target.value)}>
				<option>10</option>
				<option>20</option>
				<option>30</option>
				<option>40</option>
			</select>
			<button className={style.search_btn}>Search</button>
		</form>
	);
}

export default Search;
