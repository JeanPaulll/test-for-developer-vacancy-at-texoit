import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxMinIntervalBetweenWinsComponent } from './max-min-interval-between-wins.component';

describe('MaxMinIntervalBetweenWinsComponent', () => {
  let component: MaxMinIntervalBetweenWinsComponent;
  let fixture: ComponentFixture<MaxMinIntervalBetweenWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxMinIntervalBetweenWinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxMinIntervalBetweenWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
