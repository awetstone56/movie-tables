import { Movie } from "../../models/movie.model";
import { Action, on, createReducer } from '@ngrx/store';
import { retrievedMoviesList } from "../actions/movie.action";

export const initialState: ReadonlyArray<Movie> = [];

export const moviesReducer = createReducer(
    initialState,
    on(retrievedMoviesList, (state, { Movie }) => [...Movie])
);
