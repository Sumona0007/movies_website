import React from 'react';
import Table from './table.components';
 
const Movies_Table = ({movies,handleRating, onSort,sortColumn}) => {
  
    return (
        <Table
          items={movies}
          handleRating={handleRating}
          onSort={onSort}
          sortColumn={sortColumn}
         />
      );
}
 

 
export default Movies_Table;