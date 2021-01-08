import React, { useState, useEffect } from "react";
import axios from "axios";
// axios can take a second argument.
// the second argument is an object that takes key value pairs that get appended to the end of the base url.
// for example ?action=query&list=search&origin=*&srsearch=term
const baseURL = "https://en.wikipedia.org/w/api.php";

const Search = () => {
  const [term, setTerm] = useState("Programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 800);

    return () => clearTimeout(timerId);
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(baseURL, {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    const { pageid, title, snippet } = result;
    return (
      <div key={pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${pageid}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{title}</div>
          {/* Line below opens up possibility for cross site scripting. Only allowed because its a small project with no authentication system in place*/}
          <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <div className="ui icon input">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
