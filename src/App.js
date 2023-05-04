import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/Search';
import HomePage from './Components/home-page';

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
        <SearchBar/><HomePage books={books} />
    </div>
  );
}

export default App;

