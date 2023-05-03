import AddBook from "./Components/AddBook";
import { DisplayAddedBook } from "./Components/DisplayAddedBook";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] =useState([])
  const [newBooks, setNewBooks] = useState([])

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
      <DisplayAddedBook
        newBooks={newBooks}
        setNewBooks={setNewBooks}
        onDeleteBook={deleteBook}
        id={newBooks.id}
      />
      <AddBook newBooks={newBooks} setNewBooks={setNewBooks} />
    </div>
  );
}

export default App;
