import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsWithmultipleWinnersComponent } from './years-withmultiple-winners.component';

describe('YearsWithmultipleWinnersComponent', () => {
  let component: YearsWithmultipleWinnersComponent;
  let fixture: ComponentFixture<YearsWithmultipleWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearsWithmultipleWinnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearsWithmultipleWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
