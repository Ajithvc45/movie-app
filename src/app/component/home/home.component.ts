import { Component, OnInit } from '@angular/core';
import { Movie, MovieResponse } from 'Movie';
import { MoviesService } from 'src/app/movies.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  collection = [];

  
  
  constructor(
    private movieService:MoviesService, 
    private router:Router, 
    private active:ActivatedRoute
    ) { }
    
  movies: Movie[];
  // star = this.movies.vote_average;
  // movieList:any;
  // results :[];
  // movieList : [];
  // full_path: any;
  // poster_path:any;
  id = " "
  findMovie = "";
  // list: any;
  page:number = 1;
  // totalItems: any;
  // itemsPerPage: any;
  starRating = 0;
  currentRate:number;

  

  ngOnInit(): void {
    this.movieService.getMovies(this.page).subscribe((movie:any) => {
      console.log("this is movieeeee===============", movie)
      this.movies = movie.results;
      // this.movies = Object.values(movie)[1]
      // this.movieList[1] = this.movies;
      
      this.page =  0;
      console.log('this.movies 1111', this.movies);
    });
  }

  showMovie(movie:Movie) {
    console.log("movieeee", movie)
    console.log('movie.id',movie.id);
    this.router.navigate([`/details/${movie.id}`])
  }

  searchMovie() {
    this.movieService.searchedMovie(this.findMovie).subscribe((movie) => {
    this.movies = Object.values(movie)
    console.log(this.findMovie);
    });
  }

  gty(page:number) {
    this.page = page
    this.movieService.getMovies(page).subscribe((movie) => {
      this.movies = Object.values(movie)
      console.log('this.movies 222222222', this.movies);
    });
  }

  logOut() {
    localStorage.removeItem('formGroup')
    this.router.navigate(['']);
  }

}
