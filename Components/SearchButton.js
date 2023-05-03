import React,{useState} from 'react'

const SearchButton = ({handleSearch}) => {
    return (
        <button onClick={handleSearch}>Search</button>
    )
}

export default SearchButton
