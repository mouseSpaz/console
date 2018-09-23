import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;
  token: string;

  constructor(
    private http: HttpClient) {
    this.retrieveJsonWebToken();
  }

  public retrieveJsonWebToken() {
    this.token = localStorage.getItem('token');
    this.headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  }

  public get<T>(action: string, options?: any): Observable<HttpEvent<T>> {
    const url = `${environment.apiBaseUrl}/${action}`;
    const httpOptions = {
      headers: this.headers,
      observe: 'response',
      ...options
    };
    return this.http.get<T>(url, httpOptions);
  }

  public post<T>(action: string, data: any, options: any = {}): Observable<HttpEvent<T>> {
    const url = `${environment.apiBaseUrl}/${action}`;
    const httpOptions = {
      headers: this.headers,
      observe: 'response',
      ...options
    };
    return this.http.post<T>(url, data, httpOptions);
  }

  public put<T>(action: string, data: any, options: any = {}): Observable<HttpEvent<T>> {
    const url = `${environment.apiBaseUrl}/${action}`;
    const httpOptions = {
      headers: this.headers,
      observe: 'response',
      ...options
    };
    return this.http.put<T>(url, data, httpOptions);
  }

  public delete<T>(action: string, options: any = {}): Observable<HttpEvent<T>> {
    const url = `${environment.apiBaseUrl}/${action}`;
    const httpOptions = {
      headers: this.headers,
      observe: 'response',
      ...options
    };
    return this.http.delete<T>(url, httpOptions);
  }


}
