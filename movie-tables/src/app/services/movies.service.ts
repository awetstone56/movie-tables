import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {



  constructor (
    private _http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    // Need to update this to pull base URI & API key from config instead of hard code
    const baseUri: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=8806289684a57014fc8d7bffd258a3f4&language=en-US&page=1';
    const headers = new HttpHeaders()
      .set('content-type', 'application/json;charset=utf-8');
    return this._http
      .get<Movie[]>(baseUri, { 'headers': headers })
      .pipe(
        map((response: any) => response.results
          .map((movie: any) =>
            new Movie(
              movie.original_title,
              movie.vote_count,
              movie.vote_average,
              movie.popularity,
              movie.poser_path,
              movie.overview,
              movie.vote_average >= 7 ? true : false
            )
          )),
        catchError(this.handleError<Movie[]>('getMovies', []))
      );

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // debugging error message
      console.error(error);

      // send to UI to let user know it failed

      // return empty result to not crash app
      return of(result as T);
    };
  }
}
