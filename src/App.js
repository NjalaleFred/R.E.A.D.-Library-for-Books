import { useState } from 'react';
import './App.css';

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
    
    </div>
  );
}

export default App;
