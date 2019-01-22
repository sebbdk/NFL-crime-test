import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TopCrimesService } from 'src/app/data/top-crimes.service';

@Component({
  selector: 'nfl-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.scss']
})
export class TopCrimesComponent implements OnInit {

  public topCrimes: Observable<any>;
  public topCrimesSync: Array<any> = [];

  public filterArgs: Object = {
    prop: 'Category',
    subj: ''
  };

  constructor(private topCrimesServ: TopCrimesService) {
    this.topCrimes = topCrimesServ.data();
    this.topCrimes.subscribe(data => {
      this.topCrimesSync = data;
    });
  }

  filterChange(event) {
    const target: any = event.target || event.srcElement || event.currentTarget;
    this.filterArgs = { ...this.filterArgs, subj: target.value}
  }

  ngOnInit() {
  }

}
