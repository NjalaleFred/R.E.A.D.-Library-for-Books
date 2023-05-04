import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './home-page';

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
      <HomePage />
    </div>
  );
}

export default App;

