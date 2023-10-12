import React ,{Component} from "react";
import { Link } from "react-router-dom";
import Form from "./common/form.components";
import {getmovies} from "../service/movies.services";

class Navigation extends Form {
  state = { 
       data:{
        searchquery:''
       },
       errors:{},
       
       movies:getmovies(),
  } 

  doSubmit = (e) =>{

  }

  searchMovies = () => {
    if(this.state.data.searchquery.trim()==='')return [];
    return this.state.movies.filter((movie)=>movie.title.includes(this.state.data.searchquery));
  }


  render() { 
    const search_movies=this.searchMovies();
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">
            IMDB
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <ul className="navbar-nav me-auto mb-2mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " to="/movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/add-movies">
                    Add Movies
                  </Link>
                </li>
              </ul>
             
              <form className="d-flex" onSubmit={this.handleSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name="searchquery"
                  value={this.state.data.searchquery}
                  onChange={this.handleChange}
                />
                <div class={search_movies.length ? 'card' : 'card d-none'} style={{position:'absolute', top : 50 , width: "18rem"}} >
                  <ul class="list-group list-group-flush">
                    {
                      search_movies.map((movie,idx)=><li key={idx} className="list-group-item">{movie.title}</li>)
                    }
                    
                  </ul>
                </div>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              
                <li className="nav-item d-flex">
                  <Link className="nav-link " to="/sign_in">
                    Login
                  </Link>
                  <Link className="nav-link " to="/sign_up">
                    Sign Up
                  </Link>
                </li>
             
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
 
export default Navigation;
           
       
