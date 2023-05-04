import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function AddBook({ newBooks, setNewBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [subjects, setSubjects] = useState("");
  
  const history = useHistory();

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

    fetch("https://books-7zzp.onrender.com/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((resp) => resp.json())
      .then((data) => {
        postBook(data);
        history.push("/")

        setAuthor("");
        setImage("");
        setSubjects("");
        setTitle("");
      });
  }

  return (
    <div>
      <header style={{
                backgroundColor: 'whitesmoke',
                padding: '20px',
                border: 'solid',
                borderColor: 'gray'
                }}>
                "Add a Book"
            </header>

      <form onSubmit={handleSubmit}
      style={{display:'inline-grid', margin:'20px'}}>
        <input
          style={{margin: '10px', width:'200px'}}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          style={{margin: '10px'}}
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          style={{margin: '10px'}}
          type="text"
          placeholder="Subject"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
        />

        <input
          style={{margin: '10px'}}
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit" style={{cursor: 'pointer'}}>Add a Book</button>
      </form>
    </div>
  );
}

export default AddBook;
