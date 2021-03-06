import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { catchError, finalize, map, retry } from 'rxjs/operators';

import { ApiService } from '../services/api.service';
import { environment } from '../../environments/environment';
import { RestService } from '../services/rest.service';
import { User } from '../models/User';

interface Token {
  data: {
    token: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User = null;
  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private rest: RestService) { }

  can(grant: string): Observable<boolean> | boolean {
    if (!this.user) {
      return false;
    } else {
      return true;
    }
  }

  login(email: string, password: string): Observable<void> {
    const url = `${environment.apiBaseUrl}/auth`;
    const data = {
      email: email,
      password: password
    };
    return this.http.post<Token>(url, data).pipe(
      map((res: Token) => {
        localStorage.setItem('token', res.data.token);
        this.api.retrieveJsonWebToken();
      }),
      retry(3),
      catchError(this.handleError)
    );
  }

  public isLoggedIn() {
    return localStorage.getItem('token') === null ? false : true;
  }

  getSelf(): Observable<User> {
    if (!this.user) {
      return this.api.get<User>('/myself')
        .pipe(
          map((response: HttpResponse<any>) => {
            return this.user = new User(response.body.data);
          })
        );
    } else {
      return of(this.user);
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  requestResetPasswordToken(email: string): Observable<void> {
    const url = `${environment.apiBaseUrl}/auth/password_reset`;
    const data = {
      email: email,
    };
    return this.http.post(url, data).pipe(
      map(message => {
          console.log(message);
      }),
      catchError(this.handleError)
    );
  }

  resetPassword(email: string, password: string, password_confirmation: string, token: string): Observable<void> {
    const url = `${environment.apiBaseUrl}/auth/password_reset/${token}`;
    const data = {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      token: token
    };
    return this.http.post(url, data).pipe(
      map(message => {
          console.log(message);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(
      `Server returned ${error.status}, ` +
      `body: ${error.error.message}`);
    return throwError(
      'Error. Please try again later.');
  }
}
