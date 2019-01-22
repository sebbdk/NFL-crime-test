import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nfl-top-players-for-crime-page',
  templateUrl: './top-players-for-crime-page.component.html',
  styleUrls: ['./top-players-for-crime-page.component.scss']
})
export class TopPlayersForCrimePageComponent implements OnInit {
  public selectedCrime: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.selectedCrime = params.get('crimeid');
    });
  }
}
