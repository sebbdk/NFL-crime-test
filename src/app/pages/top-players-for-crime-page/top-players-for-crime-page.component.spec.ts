import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlayersForCrimePageComponent } from './top-players-for-crime-page.component';

describe('TopPlayersForCrimePageComponent', () => {
  let component: TopPlayersForCrimePageComponent;
  let fixture: ComponentFixture<TopPlayersForCrimePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPlayersForCrimePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPlayersForCrimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
