import React from "react";

const HomePage = ({books}) => {
    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {books.map((book) => (
                    <div key={book.id} className="card" style={{ width: "300px", margin: "10px" }}>
                        <img src={book.formats["image/jpeg"]} alt="" style={{ width: "100%" }} />
                        <div style={{ padding: "10px" }}>
                            <h2>{book.title}</h2>
                            <p>by {book.authors.map((author) => author.name).join(", ")}</p>
                            <p>{book.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
