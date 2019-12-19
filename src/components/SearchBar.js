import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.alphabetically ? true : false} onChange={props.sortAlphabetically}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.price ? true : false } onChange={props.sortPrice}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.filterStocks(event.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
