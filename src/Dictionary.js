import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

//14:19
export default function Dictionary() {
  let [keyword, setKeyword] = useState("world");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary ">
        <section>
          <form className="text-center" onSubmit={handleSubmit}>
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
  } else {
    load();
    return "Loading...";
  }
}
