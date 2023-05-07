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

  function handleImageUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
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

        <label htmlFor="image-input" style={{margin: '10px'}}>Choose an image:</label>
        <input
          id="image-input"
          type="file"
          accept=".jpg,.jpeg,.png,.gif"
          onChange={handleImageUpload}
          style={{margin: '10px'}}
        />
        <button type="submit" style={{cursor: 'pointer'}}>Add a Book</button>
      </form>
    </div>
  );
}

export default AddBook;

