import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-token-request',
  templateUrl: './token-request.component.html',
  styleUrls: ['./token-request.component.scss']
})
export class TokenRequestComponent implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });
  processingSubmission = false;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  attemptRequestToken(): void {
    const credentials = this.form.value;
    // TODO: Find a better method for identifying form has values defined.
    if (credentials.email) {
      this.processingSubmission = true;

      this.authenticationService.requestResetPasswordToken(credentials.email).subscribe(
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
