import React, { useState } from "react";
import GenreFilter from "./GenreFilter";

const HomePage = ({ books }) => {
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredBooks = selectedGenre
    ? books.filter((book) =>
        book.subjects.some((subject) =>
          subject.toLowerCase().includes(selectedGenre.toLowerCase())
        )
      )
    : books;

  return (
    <div>
      <GenreFilter selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredBooks.map((book) => (
          <div key={book.id} className="card" style={{ width: "300px", margin: "10px" }}>
            <img src={book.formats["image/jpeg"]} alt="" style={{ width: "100%" }} />
            <div style={{ padding: "10px" }}>
              <h2>{book.title}</h2>
              <p>by {book.authors.map((author) => author.name).join(", ")}</p>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
