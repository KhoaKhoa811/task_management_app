import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBoard } from './calendar-board';

describe('CalendarBoard', () => {
  let component: CalendarBoard;
  let fixture: ComponentFixture<CalendarBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarBoard],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
