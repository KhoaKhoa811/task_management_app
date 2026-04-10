import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelWrapper } from './side-panel-wrapper';

describe('SidePanelWrapper', () => {
  let component: SidePanelWrapper;
  let fixture: ComponentFixture<SidePanelWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidePanelWrapper],
    }).compileComponents();

    fixture = TestBed.createComponent(SidePanelWrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
