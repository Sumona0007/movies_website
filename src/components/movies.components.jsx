import React, { Component } from "react";
import Pagination from "./common/pagination.components";
import {getGenres, getmovies} from "../service/movies.services";
import Filter from "./common/filtering.components";
import Movies_Table from './movies-table.components';
import _ from 'lodash';

class Movies extends Component {
  state = {
      movies:getmovies(),
      genres:[{name:"All Genres"}, ...getGenres()],
      activepage:1,
      pagecount:10,
      selectedGenre:'All Genres',
      sortColumn:{path:'title' , order:'asc'}
     
  };
  

  handleChangepage=(page)=>{
    this.setState({...this.state, activepage : page})
  }

  filterMovies = () =>{
    const {movies ,selectedGenre} =this.state;

    const filteredMovies = movies.filter(movie => {
      if(selectedGenre==='All Genres') return true;
      if(movie.genres.includes(selectedGenre))return true;
      return false;
    });
     return filteredMovies;
  }

  paginatedMovies= (movies) =>{
    const{activepage , pagecount}=this.state;
    const start=(activepage-1)*pagecount;
    const paginatedmovies=movies.slice(start, start+pagecount);
    return paginatedmovies;
  }

  handleRating=(title)=>{
    const tovie=this.state.movies.filter(movie=>{
       if(movie.title===title && movie.your_rating===1){
          return {your_rating:movie.your_rating=0};
       }
       else if(movie.title===title && movie.your_rating===0){
         return {your_rating:movie.your_rating=1};
       }
       return {your_rating:movie.your_rating};
    });
    this.setState({movies:tovie});
  }

  handleGenre=(genree)=>{
    this.setState({...this.state ,selectedGenre : genree , activepage : 1});
  }
 
  handleSort=(sortColumn)=>{
    this.setState({...this.state , sortColumn});
  }
  sortedMovies = (movies) =>{
    const {sortColumn} =this.state;
     const sortedMovies =_.orderBy(movies, [sortColumn.path],[sortColumn.order]);
     return sortedMovies;
  }
   
  render() {
     const filtered=this.filterMovies();
     const sort=this.sortedMovies(filtered);
     const movies= this.paginatedMovies(sort);
    
    return (
        <>
           <div className="row">
                <Filter 
                  filteredItems={this.state.genres.map((genre,idx)=>({id:idx , name:genre.name}))}
                  onclick={this.handleGenre}
                  selectedItems={this.state.selectedGenre}
                />
                  
               <div className="col-lg-8">
                  <h3>Showing {filtered.length} movies</h3><br/>
                      <Movies_Table 
                        movies={movies}
                        handleRating={this.handleRating}
                        onSort={this.handleSort}
                        sortColumn={this.state.sortColumn}
                      />
                      <Pagination 
                          
                          total = {filtered.length}
                          pagecount={this.state.pagecount}
                          activepage={this.state.activepage}
                          onchangepage={this.handleChangepage}
                      />
                 </div>
            </div>
           
                
        </>
    );
  }
}

export default Movies;
