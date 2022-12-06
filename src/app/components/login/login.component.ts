import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  
  })

  constructor(private fb:FormBuilder,private router:Router) { }

  get loginFormControls(){
    return this.loginForm.controls;
  }

  submit(){
    this.router.navigate(['/home'])
  }
   
}
