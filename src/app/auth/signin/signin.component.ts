import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errorMessage: string;
  signinForm: FormGroup;

  constructor(private formBuilder:FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const email = this.signinForm.value['email'];
    const password = this.signinForm.value['password'];

    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/books'])
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
