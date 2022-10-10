import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private movieService:MoviesService, private router:Router, private active:ActivatedRoute) { }

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
    })
  }

  backward() {
    localStorage.removeItem('details')
    this.router.navigate(['']);
  }

}
