import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Movie } from 'Movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // movieData = new Movie('','')
  movieData: any = [];

  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    let id = localStorage.getItem('details');
    console.log('data got with id'+id);
    this.movieService.singleMovie(id).subscribe((data)=>{
    this.movieData=JSON.parse(JSON.stringify(data));
    })
  }

}
