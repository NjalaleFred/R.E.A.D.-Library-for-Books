import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // fetch(`https://gutendex.com/books/?page=${page}&topic=${genre}&search=${query}`)
        fetch(`https://gutendex.com/books/?page=1&topic=${genre}&search=${query}&fields=id,title,authors,description,image,subjects`)
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.results);
            })
            .catch((error) => console.error(error));
    }, [genre, query]);

    return (
        <div>
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
