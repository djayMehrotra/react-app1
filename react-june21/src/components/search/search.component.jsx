import React from 'react';
import './search.style.css';

/* 
   class is not used, no internal state or life cycle method in a class component 
*/
export const SearchBox = ({placeholder, handleChange}) => {
    return ( 
        <input
          type="search"
          className='search' 
          placeholder={placeholder}
          onChange={handleChange}
        />
     );
}