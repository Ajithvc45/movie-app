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
  page:number = 0;
  totalItems: any;
  itemsPerPage: any;

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movie) => {
      this.movies = Object.values(movie)
      // this.movies = movie.data.data;
      // this.totalItems = movie.data.total;
      console.log(this.movies);
    });

    this.active.paramMap.subscribe((params: ParamMap) => {
      console.log('---------------- ', params.get('id'));
    })
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
    this.movieService.getPage(page).subscribe((data:any)=> {
      this.list = data.data.data;
      this.page = page;
      console.log(this.page)
      // console.log(this.list)
    })
  }

}
