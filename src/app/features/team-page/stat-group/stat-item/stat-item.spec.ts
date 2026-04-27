import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatItem } from './stat-item';

describe('StatItem', () => {
  let component: StatItem;
  let fixture: ComponentFixture<StatItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatItem],
    }).compileComponents();

    fixture = TestBed.createComponent(StatItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
