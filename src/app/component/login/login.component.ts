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
  // success:boolean;
  // formArray:any = FormArray;
  // success: boolean = false;
  constructor(private authService:AuthServiceService, private router:Router) { }

  ngOnInit(): void {
    this.initForm(); 
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });

    // this.formArray = new FormArray({
    //   username: new FormArray('',[Validators.required]),
    //   password: new FormArray('',[Validators.required])
    // });
  }

  loginProcess() {
    const username = this.formGroup.controls['username'];
    const password = this.formGroup.controls['password'];

    if(username.value == "" && password.value == "") {
      this.formGroup.setErrors({ errors: true });
    }else if(username.value != "ajithvc45" && password.value != "Ajithvc45@") {
      this.formGroup.setErrors({ unauthenticated: true });
    }

    if(username.value === "ajithvc45" && password.value === "Ajithvc45@"){
      console.log("doneee",this.formGroup.value)
      this.authService.login(this.formGroup.value).subscribe(result => {
        if(result.success){
          console.log("got it from server",this.formGroup.value)
          this.router.navigate(['home']);
        }else{
          console.log("oopsss" + this.formGroup.value)
        }
      })
    }else{
      console.log("nop",this.formGroup.value)
      // alert("Invalid Credentials")
      // this.formGroup.value.setErrors({ check: true })
      
      
    }
    console.log('------- this.formGroup:', this.formGroup.value)
    // if (this.formGroup.valid) {
    //   this.authService.login(this.formGroup.value).subscribe(result => 
    //     if (result.success){
    //       console.log("got it from server",this.formGroup.value) 
          
          
    //       alert("you got ittttt"+ result.value);
    //       this.router.navigate(['home'])
    //     }else{
    //       this.success = false;
    //       alert("oopsss" + result.value)
    //     }
    //   })
    // }

    localStorage.setItem('formGroup', username.value);
  }

}
