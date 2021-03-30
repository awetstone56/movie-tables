import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent implements OnInit {
  columnHeaders: string[] = [
    'Title',
    'Vote Count',
    'Average Vote',
    'Popularity',
    'Poster',
    'Overview',
    'Favorite'
  ];

  movies: Movie[] = [];

  voteIsEditable: boolean = false;
  averageVote = new FormControl('');
  favorite = new FormControl('');

  constructor (
    private _moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this._moviesService.getMovies().subscribe(movies => this.movies = movies);
  }

  public deleteMovie(movie: Movie) {
    const index = this.movies.indexOf(movie, 0);
    if (index > -1)
      this.movies.splice(index, 1);
  }

  public enableVoteEditing(e: any): void {
    if (e)
      this.voteIsEditable = !this.voteIsEditable;
  }
}
