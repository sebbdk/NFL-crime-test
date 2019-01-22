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

  public filterArgs: Object = {
    prop: 'Team_name',
    subj: ''
  };

  constructor(private topTeamServ: TopTeamsService) { }

  ngOnInit() {
    this.data = this.topTeamServ.data(this.crime)
  }

  filterChange(event) {
    const target: any = event.target || event.srcElement || event.currentTarget;
    this.filterArgs = { ...this.filterArgs, subj: target.value}
  }
}
