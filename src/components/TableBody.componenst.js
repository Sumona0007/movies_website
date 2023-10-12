import { render } from '@testing-library/react';
import React from 'react';

const TableBody = ({items,columns,handleRating}) => {
    renderCell=(column,item)=>{
        if(column.path==='posterurl')return(
                   <td>
                        <img 
                        style={{width:'40px',heigt:'auto'}} alt="" src={item[column.path]}
                        >
                        </img>
                     </td>
            )
          return <td>{item[column.path]}</td>
    }
    return (
        <tbody>
            {
                items.map(item => (
                    <tr>
                      {
                        columns.map(column =>(
                            renderCell(column,item)

                        )
                            
                        )
                        
                      }
                       
                        {/* <td>{item.title}</td>
                        <td><i class='bi bi-star'></i>{item.imdbRating}</td>
                        <td onClick ={()=>handleRating(item.title)} > 
                            <i class={item.your_rating ? 'bi bi-star-fill text-warning':'bi bi-star'}>
                            </i>
                        </td> */}
                </tr>
                ))
             }
        </tbody>
       
    );
}
 
export default TableBody;