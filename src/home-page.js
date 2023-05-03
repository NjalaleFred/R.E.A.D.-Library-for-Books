import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
    const [genre, setGenre] = useState("");
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
//         fetch(`https://gutendex.com/books/?page=${page}&topic=${genre}&search=${query}`)
        fetch(`https://gutendex.com/books/?page=${page}&topic=${genre}&search=${query}&fields=id,title,authors,description,image,subjects`)
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.results);
                setHasNextPage(!!data.next);
            })
            .catch((error) => console.error(error));
    }, [page, genre, query]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        setPage(1);
    };

    const handlePreviousPage = () => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
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
                        <th>Description</th>
                        <th>Subjects</th>
                        <th>Download Count</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.authors.map((author) => author.name).join(", ")}</td>
                            <td>{book.description}</td>
                            <td>{book.subjects.join(", ")}</td>
                            <td>{book.download_count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {page > 1 && <button onClick={handlePreviousPage}>Previous Page</button>}
            {hasNextPage && <button onClick={handleNextPage}>Next Page</button>}
        </div>
    );
};

export default HomePage;
