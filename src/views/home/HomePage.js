import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import { Link } from "react-router-dom";
import routes from "../../routes";

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    moviesApi.fetchTrendingMovies().then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `movies/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
