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
  // page = "";
  list: any;
  page:number = 1;
  totalItems: any;
  itemsPerPage: any;

  ngOnInit(): void {
    this.movieService.getMovies(this.page).subscribe((movie) => {
      this.movies = Object.values(movie)
      this.page =  0
      // this.movies = movie.data.data;
      // this.totalItems = movie.data.total;
      console.log('this.movies 1111', this.movies);
    });

    // this.active.paramMap.subscribe((params: ParamMap) => {
    //   console.log('---------------- ', params.get('id'));
    // })

    // this.gty(this.page)


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
      // this.movies = movie.data.data;
      // this.totalItems = movie.data.total;
      console.log('this.movies 222222222', this.movies);
    });
    // this.movieService.getPage(page).subscribe((data:any)=> {
    //   // this.movies=JSON.parse(JSON.stringify(data));
    //   this.list = data.data.data;
    //   this.page = page;
    //   console.log(this.page);
    //   console.log(this.movies);
    //   console.log(this.list)
    // })
  }

}
