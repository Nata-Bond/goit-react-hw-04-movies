import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import routes from "../routes";
import HomePage from "../views/home/HomePage";
import MoviesPage from "../views/movies/MoviesPage";
import MovieDetailsPage from "../views/movieDetails/MovieDetailsPage";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movies} exact component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
      </Switch>
    </Layout>
  );
};

export default App;
