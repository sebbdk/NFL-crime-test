import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nfl-top-teams-for-crime-page',
  templateUrl: './top-teams-for-crime-page.component.html',
  styleUrls: ['./top-teams-for-crime-page.component.scss']
})
export class TopTeamsForCrimePageComponent implements OnInit {
  public selectedCrime: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.selectedCrime = params.get('crimeid');
    });
  }
}
