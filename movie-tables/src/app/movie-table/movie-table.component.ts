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

  // maybe pull this out into separate class so it doesn't take up so much room in component
  columnHeaders: any[] = [
    {
      title: 'Title', // display name
      value: 'title', // actual model property name
      sortable: true, // determines whether this column can be sorted
      filterable: true, // determines whether this column can be filtered
    },
    {
      title: 'Vote Count',
      value: 'voteCount',
      sortable: true,
      filterable: true,
    },
    {
      title: 'Average Vote',
      value: 'averageVote',
      sortable: true,
      filterable: true,
    },
    {
      title: 'Popularity',
      value: 'popularity',
      sortable: true,
      filterable: true,
    },
    {
      title: 'Poster',
      value: 'poster',
      sortable: false,
      filterable: false,
    },
    {
      title: 'Overview',
      value: 'overview',
      sortable: false, // doesn't really make sense for overview to be sorted
      filterable: true,
    },
    {
      title: 'Favorite',
      value: 'favorite',
      sortable: false,
      filterable: false,
    },
  ];

  sortByColumn = this.columnHeaders[0];
  filterByColumn = this.columnHeaders[0];
  filterText: string = '';

  movies: Movie[] = [];

  voteIsEditable: boolean = false;
  averageVote = new FormControl('');
  favorite = new FormControl('');

  constructor (
    private _moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this._moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.onSortChange(this.sortByColumn);
    });
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

  public validSortingHeaders(): any[] {
    return this.columnHeaders.filter(header => header.sortable === true);
  }

  public validFilteringHeaders(): any[] {
    return this.columnHeaders.filter(header => header.filterable === true);
  }

  // sorts in ascending order
  public onSortChange(e: any) {
    const column = e.value;
    this.movies.sort((a, b) => {
      switch (column) {
        case 'title':
          return (a.title < b.title ? -1 : 1);
        case 'voteCount':
          return (a.voteCount - b.voteCount);
        case 'averageVote':
          return (a.averageVote - b.averageVote);
        case 'popularity':
          return (a.popularity - b.popularity);
        default:
          return (a.title < b.title ? -1 : 1);
      }
    });
  }

  public onFilterChange(e: any) {

  }
}
