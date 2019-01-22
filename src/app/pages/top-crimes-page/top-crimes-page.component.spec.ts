import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCrimesPageComponent } from './top-crimes-page.component';

describe('TopCrimesPageComponent', () => {
  let component: TopCrimesPageComponent;
  let fixture: ComponentFixture<TopCrimesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCrimesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCrimesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
