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
      request_token: "f2268cfe66551b8617901d038e713e3e8fc9c139",
  });
    
  } 

  IsLoggedIn() {
    return !!localStorage.getItem('formGroup');
  }
}
