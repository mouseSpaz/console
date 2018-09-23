import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  username: string = null;
  constructor(
    private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.getSelf().subscribe(user => {
      this.username = user.username;
    });
  }

}
