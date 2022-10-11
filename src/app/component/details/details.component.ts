import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from 'Movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // movieData = new Movie('','')
  movieData: any = [];
  id: any;
  controllerSrc: any;
  movieTrailer:any;

  constructor(
    private movieService:MoviesService, 
    private router:Router, 
    private active:ActivatedRoute, 
    private sanitizer:DomSanitizer
    ) { }

  ngOnInit(): void {
    // let id = localStorage.getItem(`details/${this.movieData.id}`);
    // console.log('data got with id'+ id);
    // this.movieService.singleMovie(id).subscribe((data)=>{
    // this.movieData=JSON.parse(JSON.stringify(data));
    // })
    this.id = this.active.snapshot.params['id']
    console.log("movie id is"+ this.id);
    this.movieService.singleMovie(this.id).subscribe((data)=>{
    this.movieData=JSON.parse(JSON.stringify(data));

    this.movieService.getVideo(this.id).subscribe((movie) => {
    this.movieTrailer=JSON.parse(JSON.stringify(movie));
    console.log(this.movieTrailer.results[0].key);
    const url=`https://www.youtube.com/embed/${this.movieTrailer.results[0].key}`;
    this.controllerSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    })
    
    // console.log(this.movie);
    // console.log(this.movieData);
    });

    // this.movie = this.active.snapshot.params['movie']
    // this.movieService.getVideo(this.id).subscribe((movie) => {
    // this.movieData = Object.values(movie)
    // console.log(this.movieData)
    // const url=`https://www.youtube.com/embed/${this.movieData}`;
    // this.controllerSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    // this.movie = this.id
    // this.movieService.getVideo(this.id).subscribe((data)=> {
    // this.movieData = JSON.parse(JSON.stringify(data));
    
    // })
  }

  backward() {
    localStorage.removeItem('details')
    this.router.navigate(['']);
  }

  getVideo() {
    console.log("helloo")
  }

}
