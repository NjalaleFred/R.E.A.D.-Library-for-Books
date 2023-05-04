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
      <div id="bio">
        <h1>Welcome to "R.E.A.D. - Library for Books"!</h1>
        <p>
          We here at the R.E.A.D. (Realtime Electronic Access Display) truly
          believe in our motto that 'Reading Is Fundamental'. That is why we
          have set up this lovely application to not only make obtaining books
          online easier, but to encourage it.
        </p>
        <div>
          In this application, you can:
          <ol>
            <li>
              Search for your favourite books in our vast database ranging from
              fiction to mystery to horror and beyond.
            </li>
            <li>
              Add any and all books of your choice that you believe deserve a
              spotlight in our database so others may borrow it.
            </li>
            <li>
              Borrow all the books you want at a time and receieve a due date
              that is three days past the borrowing date.
            </li>
          </ol>
        </div>
        <div>
          <p>
            To get started, you may use the search and filter form below to find
            a book you desire.
          </p>
          <p>
            Alternatively, you may click the "Home" button above to navigate to
            our list of books
          </p>
          <p>
            You may also borrow a book or add a new one using the respective
            buttons in the navigation bar
          </p>
          <p>We hope you have a fun time here! :D</p>
        </div>
      </div>
      <SearchBar handleSearch={handleSearch} />
      <GenreFilter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {displayBooks.map((book) => (
          <div
            key={book.id}
            className="card"
            style={{ width: "300px", border: "solid", margin: "15px" }}
          >
            <img
              src={book.formats["image/jpeg"]}
              alt=""
              style={{ width: "100%" }}
            />
            <div
              style={{
                padding: "10px",
                backgroundColor: "purple",
                fontSize: "15px",
                color: "white",
              }}
            >
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
