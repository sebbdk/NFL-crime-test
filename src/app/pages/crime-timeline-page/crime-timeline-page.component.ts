import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nfl-crime-timeline-page',
  templateUrl: './crime-timeline-page.component.html',
  styleUrls: ['./crime-timeline-page.component.scss']
})
export class CrimeTimelinePageComponent implements OnInit {

  public selectedCrime: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.selectedCrime = params.get('crimeid');
    });
  }

}
