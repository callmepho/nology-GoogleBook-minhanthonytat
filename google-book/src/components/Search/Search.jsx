import React from "react";
import { useState } from "react";
import style from "./Search.module.scss";

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
    <form className={style.search} onSubmit={formSubmit}>
      <input
        className={style.search_input}
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
      <button className={style.search_btn}>Search</button>
    </form>
  );
}

export default Search;
