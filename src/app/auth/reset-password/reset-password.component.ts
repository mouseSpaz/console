import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  token = this.route.snapshot.paramMap.get('token');
  processingSubmission = false;
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(8)]],
    password_confirmation: ['', [Validators.required, Validators.min(8)]]
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  attemptChangePassword() {
    const credentials = this.form.value;
    // TODO: Find a better method for identifying form has values defined.
    if (credentials.email && credentials.password && credentials.password_confirmation) {
      this.processingSubmission = true;

      this.authenticationService.resetPassword(
        credentials.email,
        credentials.password,
        credentials.password_confirmation,
        this.token)
      .subscribe(
        success => {
          console.log('An email has been dispatched.');
        },
        error => {
          console.log('An error occured.');
        }
      );
    }
  }

}
