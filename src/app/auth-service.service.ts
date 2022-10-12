import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  // data = {
  //   username:"ajithvc45",
  //   password:"Ajithvc45@",
  //   request_token: "7a1829f0c84c8a4134dbd1d7ed80577d3a4c6560",
  // }
  constructor(private http:HttpClient) { }

  login(data:any):Observable<any> {
    console.log("immm serverr", data)
    return this.http.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=2c7d2e78869ec86ee78d10bc69e698c9`,data = {
      username:"ajithvc45",
      password:"Ajithvc45@",
      request_token: "3ea0af64af7f1ecee8c996d9bbb2aac9dadcbe15",
  });
    
  }
}
