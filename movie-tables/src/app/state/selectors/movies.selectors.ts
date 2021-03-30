import { createSelector } from "@ngrx/store";
import { Movie } from "src/app/models/movie.model";
import { AppState } from "../app.state";

export const selectBooks = createSelector(
    (state: AppState) => state.movies,
    (books: Array<Movie>) => books
);