import { Component, OnInit, Input } from '@angular/core';
import { TopPlayersService } from 'src/app/data/top-players.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'nfl-top-players-for-crime',
  templateUrl: './top-players-for-crime.component.html',
  styleUrls: ['./top-players-for-crime.component.scss']
})
export class TopPlayersForCrimeComponent implements OnInit {

  @Input()
  public crime: any;

  public data: Observable<any>;

  public filterArgs: Object = {
    prop: 'Name',
    subj: ''
  };

  constructor(private topPlayerServ: TopPlayersService) { }

  ngOnInit() {
    this.data = this.topPlayerServ.data(this.crime)
  }

  filterChange(event) {
    const target: any = event.target || event.srcElement || event.currentTarget;
    this.filterArgs = { ...this.filterArgs, subj: target.value}
  }

}
