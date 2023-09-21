import { useState } from "react";
import Search from "./components/Search/Search";
import BookLoader from "./containers/BookLoader";
import style from "./App.css";
import PopOutCard from "./components/PopOutCard/PopOutCard";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);

  const handleSubmit = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <h1>Google Book Search</h1>
      <hr></hr>
      <div className={style.container}>
        <Search handleSubmit={handleSubmit} />
        <BookLoader searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
