import React, { useState } from "react";

import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

//
export default function Dictionary() {
  let [keyword, setKeyword] = useState("world");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "iR4eMFvM8Uj39n8n7gJOHPItWoHVS1YYtWToWl1uDc6DFnhhFPahQm1G";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          <h2 className="mb-4">What word do you want to look up?</h2>
          <form className="text-center" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="World"
              onChange={handleKeywordChange}
            />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
