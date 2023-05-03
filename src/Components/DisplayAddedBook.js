import React from "react";

export const DisplayAddedBook = ({ newBooks, onDeleteBook }) => {
  function handleDeleteBook(id) {
    fetch(`http://localhost:4001/books/${id}`, {
      method: "DELETE",
    }).then(() => onDeleteBook(id));
  }

  const myBooks = newBooks.map((book) => {
    return (
      <div key={book.id}>
        <h2>{book.title} </h2>
        <h4>{book.author} </h4>
        <img src={book.image} alt={book.title}></img>
        <button onClick={() => handleDeleteBook(book.id)}>Delete Book</button>
      </div>
    );
  });

  return <div>{myBooks}</div>;
};
