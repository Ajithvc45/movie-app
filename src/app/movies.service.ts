import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=2c7d2e78869ec86ee78d10bc69e698c9&page=1"

  constructor(private http:HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  singleMovie(id:any): Observable<Movie[]>{
    return this.http.get<Movie[]>("https://api.themoviedb.org/3/movie/"+ id +"?api_key=2c7d2e78869ec86ee78d10bc69e698c9&language=en-US");
  }

  searchedMovie(movie:any): Observable<Movie[]> {
    console.log(movie);
    return this.http.get<Movie[]>(`https://api.themoviedb.org/3/search/movie?api_key=2c7d2e78869ec86ee78d10bc69e698c9&language=en-US&query=${movie}&page=1&include_adult=false`);
  }
}
