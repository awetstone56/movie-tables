import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Movie } from './models/movie.model';
import { MoviesService } from './services/movies.service';
import { retrievedMoviesList } from './state/actions/movie.action';
import { selectMovies } from './state/selectors/movies.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movies$ = this.store.pipe(select(selectMovies));
  mov: any = select(selectMovies);
  constructor (
    private moviesService: MoviesService,
    private store: Store
  ) { }

  ngOnInit() {
    this.moviesService
      .getMovies()
      .subscribe((movies) => this.store.dispatch(retrievedMoviesList({ Movie })));
  }
}
