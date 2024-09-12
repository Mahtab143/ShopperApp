import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,AbstractControl,ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  
  constructor(private fb: FormBuilder, private routes: Router){
    
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['',Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]

    },);
  }
  
  ngOnInit(): void {
      console.log('signup successful')  

  }
  passwordmatchvalid(form : FormGroup){
    const password = form.get('password')?.value;
    const confirmpassword = form.get('confirmpassword')?.value;

    return password == confirmpassword? null: {passwordMismatch :true};
  }
  onSubmit(): void{
    if(this.signUpForm.valid){
      console.log('form submitted:', this.signUpForm.value)
    }
  }
  SigninNavigate(){
    this.routes.navigate(['app-signin'])
  }


}
