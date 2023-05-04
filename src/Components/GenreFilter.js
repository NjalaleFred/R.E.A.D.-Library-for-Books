import React from "react";

const GenreFilter = ({ selectedGenre, setSelectedGenre }) => {
  const genres = [
    "",
    "Fiction",
    "Mystery",
    "Romance",
    "Horror",
    "Science Fiction",
  ];

  return (
    <div style={{marginBottom: '20px'}}>
      <select
        value={selectedGenre}
        onChange={(event) => setSelectedGenre(event.target.value)}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre === "" ? "All Genres" : genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;


