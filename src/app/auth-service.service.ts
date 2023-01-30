import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  token:any="";
  login(data:any):Observable<any> {
    this.getToken({}).subscribe(res => {
      this.token = res.request_token;
      console.log("ressssssss",this.token);
    })
    return this.http.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=2c7d2e78869ec86ee78d10bc69e698c9`,data = {
      username:"ajithvc45",
      password:"Ajithvc45@",
      request_token: this.token,
  });
    
  } 

  getToken(token:any):Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=2c7d2e78869ec86ee78d10bc69e698c9`, token)
  }

  IsLoggedIn() {
    return !!localStorage.getItem('formGroup');
  }
}
