import React from "react";

export const DisplayAddedBook = ({ newBooks, onDeleteBook }) => {
  function handleDeleteBook(id) {
    fetch(`https://books-7zzp.onrender.com/books/${id}`, {
      method: "DELETE",
    }).then(() => onDeleteBook(id));
  }

  const myBooks = newBooks.map((book) => {
    return (
      <div
        key={book.id}
        style={{
          margin: "15px",
          width: "300px",
          display: "block",
          flexWrap: "wrap",
          backgroundColor: "purple",
          border: "solid",
        }}
      >
        <img style={{ width: "100%" }} src={book.image} alt={book.title}></img>
        <h2 style={{ margin: "0px", color: "white" }}>{book.title} </h2>
        <p style={{ margin: "0px", color: "white" }}>by {book.author} </p>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => handleDeleteBook(book.id)}
        >
          Delete Book
        </button>
      </div>
    );
  });

  return <div style={{ display: "flex" }}>{myBooks}</div>;
};
