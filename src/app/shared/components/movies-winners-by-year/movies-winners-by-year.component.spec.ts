import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWinnersByYearComponent } from './movies-winners-by-year.component';

describe('MoviesWinnersByYearComponent', () => {
  let component: MoviesWinnersByYearComponent;
  let fixture: ComponentFixture<MoviesWinnersByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesWinnersByYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesWinnersByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
