import React from 'react';
import TableHeader from './TableHeade.components';
import TableBody from './TableBody.components';

const Table = ({items , handleRating, onSort,sortColumn}) => {
    const columns=[
        {path:'posterurl' , label:'poster', content:item=> <td><img src={item.posterurl} style={{width:'40px' , height:'auto'}} alt=""/></td>},
        {path:'title' , label:'title' ,content:item=><td>{item.title}</td>},
        { path:'imdbRating' , label:'IMDB Rating', content:item=><td><i class='bi bi-star'></i>{item.imdbRating}</td>},
        {path:'your_rating' , label:'Your Rating', content:item=><td onClick={()=>handleRating(item.title,item.your_rating)}><i className={item.your_rating ? 'bi bi-star-fill text-warning' : 'bi bi-star'}></i></td>}
       
        
    ]
    return (
        <table className="table"> 
            <TableHeader 
              items={items}
              columns={columns}
              onSort={onSort}
              sortColumn={sortColumn}
            />
            <TableBody 
                items={items}
                columns={columns}
            />
            </table> 
    );
}
 
export default Table;