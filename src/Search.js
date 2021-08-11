import React from 'react';

const Search = ({searchChange}) => {
    return (
        <input type = "search" name = "search" placeholder = "Search" onChange={searchChange}/>
    )
}

export default Search;