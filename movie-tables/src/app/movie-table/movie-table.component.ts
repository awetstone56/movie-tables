import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
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

  // movies: Movie[] = [
  //   {
  //     title: 'Lord of the Rings',
  //     voteCount: 50,
  //     averageVote: 100,
  //     popularity: 150,
  //     poster: 'image here',
  //     overview: 'A movie about the one ring to rule them all',
  //     favorite: true
  //   },
  //   {
  //     title: 'Good Will Hunting',
  //     voteCount: 25,
  //     averageVote: 50,
  //     popularity: 75,
  //     poster: 'image here',
  //     overview: 'A movie with great quotes',
  //     favorite: false
  //   }
  // ];

  voteIsEditable: boolean = false;
  averageVote = new FormControl('');
  favorite = new FormControl('');

  constructor (
    private _moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this._moviesService.getMovies().subscribe(movies => this.movies = movies);
  }

  enableVoteEditing(e: any): void {
    if (e)
      this.voteIsEditable = !this.voteIsEditable;
  }

}
