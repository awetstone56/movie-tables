import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { MoviesService } from './services/movies.service';

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
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
