import { Component, OnInit, Input } from '@angular/core';
import { TopTeamsService } from 'src/app/data/top-teams.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'nfl-top-teams-for-crime',
  templateUrl: './top-teams-for-crime.component.html',
  styleUrls: ['./top-teams-for-crime.component.scss']
})
export class TopTeamsForCrimeComponent implements OnInit {

  @Input()
  public crime: any;

  public data: Observable<any>;

  constructor(private topTeamServ: TopTeamsService) { }

  ngOnInit() {
    this.data = this.topTeamServ.data(this.crime)
  }

}
