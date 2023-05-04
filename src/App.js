import AddBook from "./Components/AddBook";
import { useEffect, useState } from "react";
import { Borrowing } from "./Components/Borrowing";
import HomePage from "./Components/home-page";
import { NavBar } from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [setPage] = useState("/");

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

      <nav>
      <NavBar onChangePage={setPage} />
      </nav>
      
      <Switch>
        <Route path="/add">
          <AddBook newBooks={newBooks} setNewBooks={setNewBooks} />
        </Route>
        <Route path="/borrow">
          <Borrowing books={books} />
        </Route>
        <Route exact path="/">
          <HomePage
            books={books}
            newBooks={newBooks}
            setNewBooks={setNewBooks}
            onDeleteBook={deleteBook}
            id={newBooks.id}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
