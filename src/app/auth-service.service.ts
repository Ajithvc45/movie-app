import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  login(data:any):Observable<any> {
    console.log("immm serverr", data)
    return this.http.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=2c7d2e78869ec86ee78d10bc69e698c9`,data = {
      username:"ajithvc45",
      password:"Ajithvc45@",
      request_token: "87688e6f99056c682e8cc045180ed424657e5782",
  });
    
  } 

  IsLoggedIn() {
    return !!localStorage.getItem('formGroup');
  }
}
