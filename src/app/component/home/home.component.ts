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
  

  constructor(private movieService:MoviesService, private router:Router, private active:ActivatedRoute) { }
  movies: any = [];
  full_path: any;
  poster_path:any;
  id = " "
  findMovie = "";

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movie) => {
      this.movies = Object.values(movie)
      // itemImageUrl = '../assets/phone.png';
      // this.full_path = "https://image.tmdb.org/t/p/w500/" + this.poster_path;
      console.log(this.movies);
    });

    this.active.paramMap.subscribe((params: ParamMap) => {
      console.log('---------------- ', params.get('id'));
    })
  }

  showMovie(movie:any) {
    // localStorage.setItem("details", movie.id.toString());
    // this.router.navigate(['details']);
    console.log('movie.id',movie.id);
    // this.id = this.active.snapshot.params['id']
    
    // console.log(this.id)
    this.router.navigate([`/details/${movie.id}`])
  }

  searchMovie() {
    // this.id = this.active.snapshot.params['id']
    // console.log("movie id is"+ this.id);
    // this.movieService.searchedMovie(this.findMovie).subscribe((data)=>{
    // this.movies=JSON.parse(JSON.stringify(data));
    // console.log(this.findMovie);
    // })

    this.movieService.searchedMovie(this.findMovie).subscribe((movie) => {
      this.movies = Object.values(movie)
      // itemImageUrl = '../assets/phone.png';
      // this.full_path = "https://image.tmdb.org/t/p/w500/" + this.poster_path;
      console.log(this.findMovie);
    });
  }

}
