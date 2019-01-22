import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTeamsForCrimePageComponent } from './top-teams-for-crime-page.component';

describe('TopTeamsForCrimePageComponent', () => {
  let component: TopTeamsForCrimePageComponent;
  let fixture: ComponentFixture<TopTeamsForCrimePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTeamsForCrimePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTeamsForCrimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
