import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Team } from '../models/Team';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class TeamService {

  private teamsUrl = 'http://mousespaz.engine/teams';

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  /** GET teams from the server */
  getTeams (): Observable<Team[]> {
  return this.http.get<Team[]>(this.teamsUrl)
    .pipe(
      map(res => res['data']),
      tap(teams => this.log('Fetched teams.')),
      catchError(this.handleError('getTeams', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('TeamService: $(message)');
  }
}
