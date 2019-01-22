import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedPeriodService {

  constructor() { }

  private startDate: string = '2000-01-31';
  private endDate: string = '2030-01-31'; // @TODO, make dynamic

  public setStart(dateStr: string) { this.startDate = dateStr; }
  public setEnd(dateStr: string) { this.endDate = dateStr; }

  public getStart() { return this.startDate; }
  public getEnd() { return this.endDate; }
}
