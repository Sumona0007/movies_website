import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
  
    render() { 
        const {total,pagecount,activepage,onchangepage}=this.props;
        const total_pages=Math.ceil(total/pagecount);
        const pages=_.range(1 , total_pages+1 , 1);
        return (
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" >Previous</a></li>
                    {
                        pages.map(page =>(
                             <li onClick={()=>onchangepage(page)}class={activepage=== page ? "page-item active" : "page-item"}><a class="page-link" >{page}</a></li>
                        ))
                    }
                   
                   
                    <li class="page-item"><a class="page-link" >Next</a></li>
                </ul>
            </nav>
        );
    }
}
 
export default Pagination;