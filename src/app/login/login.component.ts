import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  processingSubmission: boolean;
  error: string = null;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.processingSubmission = false;
    this.form = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  attemptLogin(): void {
    const credentials = this.form.value;
    // TODO: Find a better method for identifying form has values defined.
    if (credentials.email && credentials.password) {
      this.processingSubmission = true;

      this.authenticationService.login(credentials.email, credentials.password).subscribe(
        success => {
          this.login();
        },
        error => {
          this.error = error;
          this.processingSubmission = false;
        }
      );
    }
  }

  login(): void {
    this.authenticationService.getSelf()
      .subscribe(user => {
        setTimeout(() => {
          if (this.authenticationService.isLoggedIn) {
            const redirect = this.authenticationService.redirectUrl ? this.authenticationService.redirectUrl : '/home';
            this.processingSubmission = false;
            this.router.navigate([redirect]);
          }
        }, 1000);
      });
  }

  getErrorMessage(type): string {
    switch (type) {
      case 'email':
        return 'Please enter a valid email';
      case 'password':
        return 'Please enter a valid password';
      default:
        return 'Error';
    }
  }
}
