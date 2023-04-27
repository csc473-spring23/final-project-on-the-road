import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(query);
    navigate(`/search-results?q=${query}`);
 
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="street"
        placeholder={"eg 123 Main Street"}
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SearchBar;