import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopPlayersService {

  public apiPath = 'http://nflarrest.com/api/v1/crime/topPlayers';

  constructor(private http: HttpClient) { }

  data(crimeId) {
    return this.http.get(`${this.apiPath}/${crimeId}`);
  }

}
