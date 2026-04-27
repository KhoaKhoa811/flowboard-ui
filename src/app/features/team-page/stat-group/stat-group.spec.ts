import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatGroup } from './stat-group';

describe('StatGroup', () => {
  let component: StatGroup;
  let fixture: ComponentFixture<StatGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(StatGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
