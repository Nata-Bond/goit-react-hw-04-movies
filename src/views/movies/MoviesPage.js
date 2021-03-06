import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import Searchbox from "../../components/searchbox/Searchbox";
import { Link } from "react-router-dom";
import getQueryParams from "../../utils/getQueryParams";

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      moviesApi
        .fetchSearchMovies(query)
        .then((movies) => this.setState({ movies }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      moviesApi
        .fetchSearchMovies(nextQuery)
        .then((movies) => this.setState({ movies }));
    }
  }

  handleChangeQuery = (query) => {
    console.log("query", query);

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };
  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => {
              return (
                <li key={movie.id}>
                  <Link
                    to={{
                      pathname: `${match.url}/${movie.id}`,
                      state: { from: this.props.location },
                    }}
                  >
                    {movie.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
