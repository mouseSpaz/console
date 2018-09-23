import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ListResponse } from '../models/ListResponse';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private httpParams: HttpParams;

  constructor(
    private api: ApiService) { }

    public all<T>(resourceType, path: string, page: number = 1, per_page: number = 25): Observable<ListResponse<T>> {
      return this.api
        .get(path, {
          params: new HttpParams()
            .set('page', page.toString())
            .set('per_page', per_page.toString())
        })
        .pipe(
          map((res: HttpResponse<T>) => {
            return new ListResponse<T>(resourceType, res.body, {
              total: res.headers.get('x-total'),
              page: res.headers.get('x-page'),
              per_page: res.headers.get('x-per_page')
            });
          })
        );
    }

    public query<T>(resourceType, path: string, query: any = {}, page: number = 1, perPage: number = 25): Observable<ListResponse<T>> {
      query = JSON.stringify({
        q: query,
        page: page,
        per_page: perPage
      });

      return this.api
        .post(path, query)
        .pipe(
          map((res: HttpResponse<T>) => {
            return new ListResponse<T>(resourceType, res.body, {
              total: res.headers.get('x-total'),
              page: res.headers.get('x-page'),
              per_page: res.headers.get('x-per_page')
            });
          })
        );
    }

    public find<T>(resourceType, resource: string, id: number): Observable<T> {
      const path = resource + '/' + id;

      return this.api
        .get(path, {})
        .pipe(
          map(res => {
            return new resourceType(res['body']);
          })
        );
    }

    public get<T>(resourceType, path: string, query): Observable<T> {
      return this.api
        .get(path, {
          params: new HttpParams()
            .set('query', query.toString())
        })
        .pipe(
          map((res: HttpResponse<T>) => {
            return res.body;
          })
        );
    }

    public post<T>(resourceType, path: string, data: any = {}, query: any = {}): Observable<T> {
      return this.api
        .post(path, data, query)
        .pipe(
          map((res: HttpResponse<T>) => {
            return new resourceType(res.body);
          })
        );
    }

    public put<T>(resourceType, path: string, data: any = {}, query: any = {}): Observable<T> {
      return this.api
        .put(path, data, query)
        .pipe(
          map((res: HttpResponse<T>) => {
            return new resourceType(res.body);
          })
        );
    }

    public delete<T>(resourceType, path: string, query: any = {}): Observable<T> {
      return this.api
        .delete(path, query)
        .pipe(
          map((res: HttpResponse<T>) => {
            return new resourceType(res.body);
          })
        );
    }
}
