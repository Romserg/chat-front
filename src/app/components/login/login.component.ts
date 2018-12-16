import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(30)
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(30)
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  loginForm: FormGroup;
  errorMessage: string;
  showSpinner = false;

  ngOnInit() {
    this.init();
  }

  init() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser() {
    this.showSpinner = true;
    this.authService.loginUser(this.loginForm.value).subscribe(data => {
      console.log(data);
      this.loginForm.reset();
      setTimeout(() => {
        this.showSpinner = false;
        this.router.navigate(['streams']);
      }, 2000);
    }, err => {
      this.showSpinner = false;

      if (err.error.message) {
        this.errorMessage = err.error.message;
      }
    });
  }
}
