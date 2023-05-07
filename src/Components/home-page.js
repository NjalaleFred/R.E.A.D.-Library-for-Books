import React, { useState } from "react";
import SearchBar from "./Search";
import GenreFilter from "./GenreFilter";
import { DisplayAddedBook } from "./DisplayAddedBook";

const HomePage = ({ books, newBooks, setNewBooks, onDeleteBook, id }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleSearch = (query) => {
    const results = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.authors.some((author) =>
          author.name.toLowerCase().includes(query.toLowerCase())
        )
    );
    setSearchResults(results);
  };

  const filteredBooks = selectedGenre
    ? books.filter((book) =>
        book.subjects.some((subject) =>
          subject.toLowerCase().includes(selectedGenre.toLowerCase())
        )
      )
    : books;

  const displayBooks = searchResults.length > 0 ? searchResults : filteredBooks;

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <GenreFilter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <div className="display">
        {displayBooks.map((book) => (
          <div key={book.id} className="card">
            <img src={book.formats["image/jpeg"]} alt={book.title} />
            <div className="details">
              <h2>{book.title}</h2>
              <p>by {book.authors.map((author) => author.name).join(", ")}</p>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
      <DisplayAddedBook
        newBooks={newBooks}
        setNewBooks={setNewBooks}
        onDeleteBook={onDeleteBook}
        id={id}
      />
    </div>
  );
};

export default HomePage;
