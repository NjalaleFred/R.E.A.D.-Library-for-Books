import React, { useState } from "react";

function AddBook({ newBooks, setNewBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [subjects, setSubjects] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const bookObj = {
      title: title,
      author: author,
      image: image,
      subjects: subjects,
    };

    function postBook(newBook) {
      const updatedBooks = [...newBooks, newBook];
      setNewBooks(updatedBooks);
    }

    fetch("http://localhost:4001/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((resp) => resp.json())
      .then((data) => {
        postBook(data);

        setAuthor("");
        setImage("");
        setSubjects("");
        setTitle("");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Add a Book</button>
      </form>
    </div>
  );
}

export default AddBook;
