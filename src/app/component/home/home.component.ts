import { Component, OnInit } from '@angular/core';
import { Movie } from 'Movie';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private movieService:MoviesService) { }
  movies: any = [];

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movie) => {
      this.movies = Object.values(movie)
      console.log(this.movies);
    });
  }

}
