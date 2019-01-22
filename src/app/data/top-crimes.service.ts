import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { SelectedPeriodService } from './selected-period.service';

@Injectable({
  providedIn: 'root'
})
export class TopCrimesService {

  public apiPath = 'http://nflarrest.com/api/v1/crime';

  private obsData: Observable<any>;

  constructor(private http: HttpClient, private timeline: SelectedPeriodService) {
    this.obsData = this.http.get(this.apiPath + `?start_date=${this.timeline.getStart()}&end_date=${this.timeline.getEnd()}`).pipe(share());
  }

  data():Observable<any> {
    return this.obsData;
  }

}
