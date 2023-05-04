import React, { useState } from "react";
import SearchBar from "./Search";

const HomePage = ({ books }) => {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (query) => {
    const results = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) 
    );
    setSearchResults(results);
  };
  const displayBooks = searchResults.length > 0 ? searchResults : books;

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {displayBooks.map((book) => (
          <div
            key={book.id}
            className="card"
            style={{ width: "300px", margin: "10px" }}
          >
            <img
              src={book.formats["image/jpeg"]}
              alt=""
              style={{ width: "100%" }}
            />
            <div style={{ padding: "10px" }}>
              <h2>{book.title}</h2>
              <p>
                by {book.authors.map((author) => author.name).join(", ")}
              </p>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;