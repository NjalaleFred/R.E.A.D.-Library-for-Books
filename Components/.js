import React,{useState} from 'react'
 
const SearchBar= ({handleSearch})=> {
    const [searchQuery, setSearchQuery] = useState("")
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
    }
    return (
        <div className="search-bar">
            <input
            type='text'
            placeholder='Enter the name of the book'
            value={searchQuery}
            onChange={handleInputChange}
            />
            <SearchButton handleSearch={() =>
               handleSearch(searchQuery)}/>
        </div>
    )
}
    

export default SearchBar

