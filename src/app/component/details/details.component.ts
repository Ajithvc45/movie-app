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

  movieData: any = [];
  id: number;
  controllerSrc: object;
  movieTrailer:any;

  constructor(
    private movieService:MoviesService, 
    private router:Router, 
    private active:ActivatedRoute, 
    private sanitizer:DomSanitizer
    ) { }

  ngOnInit(): void {
    this.id = this.active.snapshot.params['id']
    console.log("movie id is"+ this.id);
    this.movieService.singleMovie(this.id).subscribe((data)=>{
    this.movieData=JSON.parse(JSON.stringify(data));
    console.log("movieeeee", typeof this.movieData)

    this.movieService.getVideo(this.id).subscribe((movie) => {
    this.movieTrailer=JSON.parse(JSON.stringify(movie));
    console.log("trailerrrrr", typeof this.movieTrailer)
    console.log(this.movieTrailer.results[0].key);
    const url=`https://www.youtube.com/embed/${this.movieTrailer.results[0].key}`;
    this.controllerSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    })
    });
  }

  // backward() {
  //   localStorage.removeItem('details')
  //   this.router.navigate(['']);
  // }

  getVideo() {
    console.log("helloo")
  }

}
