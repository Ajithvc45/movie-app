import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormArray, FormControlName, FormBuilder, FormControl } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  username: string;
  password: string;
  token: any;
  request_token: any;

  constructor(private authService:AuthServiceService, private router:Router) { }

  //  Template-driven

  // User = {
  //   username: '',
  //   password: ''
  // }


  ngOnInit(): void {
    this.initForm();    
    
    // this.authService.getToken(this.token).subscribe((token:any)=>{
    //   this.token = token;
    //   // console.log("this tokennnnnnn", this.token.request_token);
    //   this.request_token = this.token.request_token;
    //   console.log("this tokennnnnnn", this.request_token)
    // })
  }

  // Reactive Form 

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    });
  }

  loginProcess() {
    const username = this.formGroup.controls['username'];
    const password = this.formGroup.controls['password'];

    this.authService.getToken(this.token).subscribe((token:any)=>{
      this.token = token;
      console.log("this form",this.formGroup.value ,this.token.request_token);
      // this.request_token = this.token.request_token;
      // console.log("this tokennnnnnn", this.request_token)
    })

    if(username.value == "" && password.value == "") {
      this.formGroup.setErrors({ errors: true });
    }else if(username.value != "ajithvc45" && password.value != "Ajithvc45@") {
      this.formGroup.setErrors({ unauthenticated: true });
    }

    if(username.value === "ajithvc45" && password.value === "Ajithvc45@"){
      this.authService.login(this.formGroup.value).subscribe(result => {
        if(result.success){
          this.router.navigate(['home']);
        }else{
          console.log("oopsss" + this.formGroup.value)
        }
      })
    }else{
      console.log("nop",this.formGroup.value)
    }
    localStorage.setItem('formGroup', username.value);
  }

  //Template-Driven

  // userVerify() {
  //   if(this.User.username == 'ajithvc45' && this.User.password == 'Ajithvc45@') {
  //     console.log("doneeee", this.User)
  //     this.authService.login(this.User).subscribe(result => {
  //       console.log("got it from server", result)
  //       this.router.navigate(['home']);
  //     })
  //   }else{
  //     console.log("oopssss", this.User)
  //   }
  // }



}
