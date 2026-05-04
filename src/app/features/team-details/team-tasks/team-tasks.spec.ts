import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTasks } from './team-tasks';

describe('TeamTasks', () => {
  let component: TeamTasks;
  let fixture: ComponentFixture<TeamTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamTasks],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamTasks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
