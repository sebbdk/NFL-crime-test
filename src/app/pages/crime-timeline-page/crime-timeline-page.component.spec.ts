import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeTimelinePageComponent } from './crime-timeline-page.component';

describe('CrimeTimelinePageComponent', () => {
  let component: CrimeTimelinePageComponent;
  let fixture: ComponentFixture<CrimeTimelinePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeTimelinePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeTimelinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
