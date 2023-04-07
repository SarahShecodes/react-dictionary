import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

//14:19
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
    <div className="Dictionary ">
      <section>
        <form className="text-center" onSubmit={search}>
          <input
            type="search"
            placeholder="Type a word here..."
            onChange={handleKeywordChange}
          />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
