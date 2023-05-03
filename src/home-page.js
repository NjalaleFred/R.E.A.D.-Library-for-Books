import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
    const [genre, setGenre] = useState("");

    useEffect(() => {
        // fetch(`https://gutendex.com/books/?page=${page}&topic=${genre}&search=${query}`)
        fetch(`https://gutendex.com/books/?page=1&topic=${genre}&search=${query}&fields=id,title,authors,description,image,subjects`)
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.results);
            })
            .catch((error) => console.error(error));
    }, [genre, query]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <h1>Book Search</h1>
            <form onSubmit={handleSearch}>
                <label htmlFor="genre">Genre:</label>
                <select id="genre" value={genre} onChange={handleGenreChange}>
                    <option value="">All</option>
                    <option value="adventure">Adventure</option>
                    <option value="romance">Romance</option>
                    <option value="science_fiction">Science Fiction</option>
                </select>
                <input type="text" placeholder="Search books" value={query} onChange={handleInputChange} />
                <button type="submit">Search</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Authors</th>
                        <th>Book Cover</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.authors.map((author) => author.name).join(", ")}</td>
                            <td><img src={book.formats["image/jpeg"]} alt=""/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;
