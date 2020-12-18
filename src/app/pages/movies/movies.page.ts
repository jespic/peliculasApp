import { IMovie } from './../../model/IMovie.interface';
import { MovieService } from './../../services/movie.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  response: Observable<IMovie>;
  title: string = '';
  type: string = '';
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchMovie(): void {
    this.response = this.movieService.search(this.title, this.type);
  }
}
