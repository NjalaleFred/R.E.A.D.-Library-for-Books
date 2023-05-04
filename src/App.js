import AddBook from "./Components/AddBook";
import { useEffect, useState } from "react";
import { Borrowing } from "./Components/Borrowing";
import HomePage from "./Components/home-page";

function App() {
  const [books, setBooks] = useState([]);
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    fetch(
      `https://gutendex.com/books/?fields=id,title,authors,description,image,subjects`
    )
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.results);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4001/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setNewBooks(data));
  }, []);

  function deleteBook(id) {
    const updatedBooks = newBooks.filter((book) => book.id !== id);
    setNewBooks(updatedBooks);
  }

  return (
    <div className="App">
      <HomePage books={books} newBooks={newBooks}
        setNewBooks={setNewBooks}
        onDeleteBook={deleteBook}
        id={newBooks.id} />
      <AddBook newBooks={newBooks} setNewBooks={setNewBooks} />
      <Borrowing books={books} />
    </div>
  );
}

export default App;
