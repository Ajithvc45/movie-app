import { Component, OnInit } from '@angular/core';
import { Movie } from 'Movie';
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
    
  movies: any = [];
  full_path: any;
  poster_path:any;
  id = " "
  findMovie = "";
  list: any;
  page:number = 1;
  totalItems: any;
  itemsPerPage: any;

  ngOnInit(): void {
    this.movieService.getMovies(this.page).subscribe((movie) => {
      this.movies = Object.values(movie)
      this.page =  0
      console.log('this.movies 1111', this.movies);
    });
  }

  showMovie(movie:any) {
    console.log('movie.id',movie.id);
    this.router.navigate([`/details/${movie.id}`])
  }

  searchMovie() {
    this.movieService.searchedMovie(this.findMovie).subscribe((movie) => {
    this.movies = Object.values(movie)
    console.log(this.findMovie);
    });
  }

  gty(page:any) {
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
