import React, { Component } from "react";
import Input from "./common/input.components";
import Form from "./common/form.components";

class MoviesForm extends Form {
  state = {
        data: {
          title: '',
          poster: '',
          rating: ''
        },
        errors:{}
  };

  doSubmit = (e) => {
   console.log('sumona');
  };



  render() {
    return (
      <>
        <div className="container w-50 mx-auto">
          <form onSubmit={this.handleSubmit}>
            <div class="mb-3">
              <Input
                label="Movie Title"
                name="title"
                id="title"
                type="text"
                value={this.state.data.title}
                onChange={ e => this.handleChange(e)}
                errors={this.state.errors}
              />
            </div>
            <div className="mb-3">
              <Input
                label="Poster Url"
                name="poster"
                id="poster"
                type="text"
                value={this.state.data.poster}
                onChange={e => this.handleChange(e)}
                errors={this.state.errors}
              />
            </div>
            <div className="mb-3">
              <Input
                label="IMDB Rating"
                name="rating"
                id="rating"
                type="text"
                value={this.state.data.rating}
                onChange={(e) => this.handleChange(e)}
                errors={this.state.errors}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Add Movie
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default MoviesForm;
