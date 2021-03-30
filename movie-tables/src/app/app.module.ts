import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { MoviesService } from './services/movies.service';
import { moviesReducer } from './state/reducers/movie.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    MovieTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ movies: moviesReducer })
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
