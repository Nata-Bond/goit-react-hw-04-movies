import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import { NavLink, Switch, Route } from "react-router-dom";
import routes from "../../routes";
import Cast from "../cast/Cast";
import Reviews from "../review/Reviews";
import s from "./movieDetails.module.css";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    moviesApi
      .fetchMovieDetails(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }));
  }

  handleGoBack = () => {
    const { location } = this.props;
    if (location.state && location.state.from) {
      return this.props.history.push(location.state.from);
    }
    this.props.history.push(routes.movies);
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;

    return (
      movie && (
        <>
          <button onClick={this.handleGoBack}> &larr; Go back</button>
          <div>
            <section className={s.mDetails}>
              <div className={s.imgBlock}>
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              </div>
              <div>
                <h2>{movie.title}</h2>
                <p>User score: {movie.vote_average}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h4>Genres</h4>
                <span>
                  {movie.genres.map((genre) => {
                    return genre.name + " ";
                  })}
                </span>
              </div>
            </section>
            <hr />
            <div>
              <h5>Additional information</h5>
              <ul>
                <li>
                  <NavLink to={`${match.url}/cast`}>Cast</NavLink>
                </li>
                <li>
                  <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
                </li>
              </ul>
              <hr />
            </div>
            <Switch>
              <Route path={routes.cast} component={Cast}></Route>
              <Route path={routes.reviews} component={Reviews}></Route>
            </Switch>
          </div>
        </>
      )
    );
  }
}
