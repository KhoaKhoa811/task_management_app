import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBoard } from './chart-board';

describe('ChartBoard', () => {
  let component: ChartBoard;
  let fixture: ComponentFixture<ChartBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartBoard],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
