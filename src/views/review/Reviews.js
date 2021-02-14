import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import s from "./reviews.module.css";

export default class Reviews extends Component {
  state = {
    reviews: null,
  };

  componentDidMount() {
    moviesApi
      .fetchMovieReviews(this.props.match.params.movieId)
      .then((reviews) => this.setState({ reviews }));
  }

  render() {
    const { reviews } = this.state;
    console.log(reviews);

    return (
      <>
        {(reviews == null || reviews.length === 0) && (
          <p> there are no reviews for this movie</p>
        )}
        {reviews && (
          <ul className={s.reviews}>
            {reviews.map((review) => {
              return (
                <li key={review.id}>
                  <h5>Author: {review.author}</h5>
                  <p className={s.text}>{review.content}</p>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
