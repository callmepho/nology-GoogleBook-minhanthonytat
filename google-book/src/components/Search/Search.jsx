import React from "react";
import { useState } from "react";

function Search({ handleSubmit }) {
	const [inputValue, setInputValue] = useState("");
	const formSubmit = (e) => {
		e.preventDefault();
		handleSubmit(inputValue);
	};

	const onInputChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<form onSubmit={formSubmit}>
			<input
				onChange={onInputChange}
				type="text"
				placeholder="search"
				value={inputValue}></input>
			<select>
				<option>10</option>
				<option>20</option>
				<option>30</option>
				<option>40</option>
			</select>
			<button>Search</button>
		</form>
	);
}

export default Search;
