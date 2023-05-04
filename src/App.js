import { useState, useEffect } from 'react';
import './App.css';
import { Borrowing } from './Components/Borrowing';

function App() {
  const [books, setBooks] =useState([])
  useEffect(() => {
    fetch(
      `https://gutendex.com/books/?fields=id,title,authors,description,image,subjects`
    )
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.results);
      });
  }, []);

  

  return (
    <div className="App">
      <Borrowing books={books}/>
    </div>
  );
}

export default App;
