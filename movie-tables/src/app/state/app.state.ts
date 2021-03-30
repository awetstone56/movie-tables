import { Movie } from "../models/movie.model";

export interface AppState {
    movies: ReadonlyArray<Movie>;
}