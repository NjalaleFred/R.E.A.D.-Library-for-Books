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

      <div id="bio" style={{textAlign: 'center', marginTop: '-30px'}}>
          <h1 style={{padding: '20px', color: 'whitesmoke'}}>Welcome to "R.E.A.D. - Library for Books"!</h1>
          <p style={{wordWrap: 'normal', fontWeight: 'bolder', lineHeight:'25px'}}>
            We here at the R.E.A.D. (Realtime Electronic Access Display) truly believe in our motto that 'Reading Is Fundamental'.
            That is why we have set up this lovely application to not only make obtaining books online easier, but to encourage it.
          </p>
          <p style={{wordWrap: 'normal', fontWeight: 'bolder'}}>
            In this application, you can:
              <ol style={{lineHeight:'30px'}}>
                <li>Search for your favourite books in our vast database ranging from fiction to mystery to horror and beyond.</li>
                <li>Add any and all books of your choice that you believe deserve a spotlight in our database so others may borrow it.</li>
                <li>Borrow all the books you want at a time and receieve a due date that is three days past the borrowing date.</li>
              </ol>
          </p>
          <text style={{wordWrap: 'normal', fontWeight: 'bolder', lineHeight: '5px'}}>
            <p>To get started, you may use the search and filter form below to find a book you desire.</p>
            <p>Alternatively, you may click the "Home" button above to navigate to our list of books</p>
            <p>You may also borrow a book or add a new one using the respective buttons in the navigation bar</p>
            <p style={{fontWeight: 'bolder', lineHeight:'100px'}}>We hope you have a fun time here! :D</p>
          </text>
          
      </div>

      {/*<img 
      src="https://wallpaperaccess.com/full/1159586.jpg"
      alt="What is R.E.A.D.?"
        width={'1600px'}
        height={'600px'}
  />*/}
      
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
