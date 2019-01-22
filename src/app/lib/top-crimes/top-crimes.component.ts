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

  constructor(private topCrimesServ: TopCrimesService) {
    this.topCrimes = topCrimesServ.data();
  }

  ngOnInit() {
  }

}
