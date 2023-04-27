import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../search bar/SearchBar.css";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(query);
    navigate(`/search-results?q=${query}`);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <div className="search-input">
          <input
            type="text"
            id="input"
            placeholder={"e.g. Restuarants Near Manhattan"}
            value={query}
            onChange={handleChange}
          />
        </div>

        <button type="submit">
          <BsSearch className="search-icon" size={25} />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
