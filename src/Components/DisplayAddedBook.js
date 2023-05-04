import React from "react";

export const DisplayAddedBook = ({ newBooks, onDeleteBook }) => {
  function handleDeleteBook(id) {
    fetch(`http://localhost:4001/books/${id}`, {
      method: "DELETE",
    }).then(() => onDeleteBook(id));
  }

  const myBooks = newBooks.map((book) => {
    return (
      <div key={book.id} style={{ display: "inline-grid", flexWrap: "wrap", backgroundColor:"purple" }}>
        <h2 style={{margin:'0px', color:'white'}}>{book.title} </h2>
        <h4 style={{margin:'0px', color:'white'}}>{book.author} </h4>
        <img src={book.image} alt={book.title}></img>
        <button style={{cursor: 'pointer'}} onClick={() => handleDeleteBook(book.id)}>Delete Book</button>
      </div>
    );
  });

  return <div>{myBooks}</div>;
};
