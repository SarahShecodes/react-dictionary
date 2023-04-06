import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

//.meanings[0].definitions[0].definition

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type something here..."
          autoFocus={true}
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
