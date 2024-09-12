import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../User.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private UserService: UserService,
    private router: Router,
  ){
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }
  ngOnInit(): void {}
  onSubmit(): void{
    const{ username,password} = this.loginForm.value;
    if(this.UserService.validateUser(username, password)){
      this.router.navigate(['/']);
    }else{
      alert('User not registered')
    }
  }
  SignupNavigate(){
    this.router.navigate(['']);
  }
  
}
