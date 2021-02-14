import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import s from "./cast.module.css";

export default class Cast extends Component {
  state = {
    cast: null,
  };

  componentDidMount() {
    moviesApi
      .fetchMovieCredits(this.props.match.params.movieId)
      .then((cast) => this.setState({ cast }));
  }
  render() {
    const { cast } = this.state;
    return (
      cast && (
        <ul className={s.list}>
          {cast.map((el) => {
            return (
              <li key={el.id}>
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                  alt={el.name}
                />
                <h4>{el.name}</h4>
                <p>Character: {el.character}</p>
              </li>
            );
          })}
        </ul>
      )
    );
  }
}
