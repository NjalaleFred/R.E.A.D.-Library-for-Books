import React,{useState} from 'react'
import SearchButton from './SearchButton'
 
const SearchBar= ({handleSearch})=> {
    const [searchQuery, setSearchQuery] = useState("")
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
    }
    return (
        <div style={{borderStyle:'double', borderColor:'black'}}>
            <input
            style={{margin:'20px', marginRight:'0px', marginBottom:'0px'}}
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



