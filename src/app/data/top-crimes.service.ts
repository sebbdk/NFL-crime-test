import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopCrimesService {

  public apiPath = 'http://nflarrest.com/api/v1/crime';

  private obsData: Observable<any>;

  constructor(private http: HttpClient) {
    this.obsData = this.http.get(this.apiPath).pipe(share());
  }

  data():Observable<any> {
    return this.obsData;
  }

}
