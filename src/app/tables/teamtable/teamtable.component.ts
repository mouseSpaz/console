import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

import { TeamService } from '../../team.service';
import { MessageService } from '../../message.service';
import { Team } from '../../Team';

@Component({
  selector: 'app-teamtable',
  templateUrl: './teamtable.component.html',
  styleUrls: ['./teamtable.component.scss']
})
export class TeamtableComponent implements OnInit {
  dataSource = new TeamDataSource(this.teamService);
  columns = ['id', 'name'];
  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

}

export class TeamDataSource extends DataSource<any> {
  constructor(private teamService: TeamService) {
    super();
  }
  connect(): Observable<Team[]> {
    return this.teamService.getTeams()
  }
  disconnect() {}
}
