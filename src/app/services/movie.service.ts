import { IMovie } from './../model/IMovie.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url: string = '';
  private apiKey: string = 'efb98851';

  constructor(private http: HttpClient) { }

  search(title: string, type:string) {
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<IMovie>(this.url).pipe(map(response => response['Search']));
  }

  getDetails(id: string) {
    return this.http.get<IMovie>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
