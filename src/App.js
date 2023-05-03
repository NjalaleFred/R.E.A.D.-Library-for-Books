import "./App.css";
import AddBook from "./Components/AddBook";
import { DisplayAddedBook } from "./Components/DisplayAddedBook";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setBooks(data));
  }, []);

  function deleteBook(id) {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  }

  return (
    <div className="App">
      <DisplayAddedBook
        books={books}
        setBooks={setBooks}
        onDeleteBook={deleteBook}
        id={books.id}
      />
      <AddBook books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
