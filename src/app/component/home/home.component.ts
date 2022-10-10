import { Component, OnInit } from '@angular/core';
import { Movie } from 'Movie';
import { MoviesService } from 'src/app/movies.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private movieService:MoviesService, private router:Router, private active:ActivatedRoute) { }
  movies: any = [];
  full_path: any;
  poster_path:any;
  
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movie) => {
      this.movies = Object.values(movie)
      // itemImageUrl = '../assets/phone.png';
      // this.full_path = "https://image.tmdb.org/t/p/w500/" + this.poster_path;
      console.log(this.movies);
    });
  }

  showMovie(movie:any) {
    localStorage.setItem("details", movie.id.toString());
    this.router.navigate(['details']);
    console.log(movie.id);
  }

}
