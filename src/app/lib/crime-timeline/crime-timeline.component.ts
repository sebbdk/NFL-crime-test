import { Component, OnInit, ViewChild, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { Chart } from 'chart.js';
import { CrimeTimelineService } from 'src/app/data/crime-timeline.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'nfl-crime-timeline',
  templateUrl: './crime-timeline.component.html',
  styleUrls: ['./crime-timeline.component.scss']
})
export class CrimeTimelineComponent implements OnInit {

  @ViewChild('lineChart') private chartRef;

  public chart: any;

  @Input() public crime: string = 'DUI';

  constructor(private timelineData: CrimeTimelineService) { }

  ngOnChanges(changes: SimpleChanges) {
    const crime: SimpleChange = changes.crime;

    console.log(changes)

    console.log(this.crime)

    if (this.crime) {
      this.timelineData.data(crime.currentValue).pipe(first()).subscribe((data: Array<any>) => {
        this.drawChart(data);
      });
    }
  }

  ngOnInit() {}

  drawChart(data: Array<any>) {
    const MonthNameMap = ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const labels = data.map(item => {
        return MonthNameMap[item.Month] + '- ' + item.Year
    });
    const dataPoints = data.map(item => item.arrest_count);


    this.chart = new Chart(this.chartRef.nativeElement.getContext('2d'), {
      type: 'line',
      responsive: false,
      maintainAspectRatio: false,
      data: {
        labels,
        datasets: [
          {
            label: "Crimes",
            data: dataPoints
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  } 
}
