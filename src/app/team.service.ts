import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Team } from './Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamsUrl = 'http://mousespaz.engine/teams';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private log(message: string) {
    this.messageService.add('TeamService: $(message)');
  }

  getTeams(): Observable<Team[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Team[]>(this.teamsUrl)
  }
}
