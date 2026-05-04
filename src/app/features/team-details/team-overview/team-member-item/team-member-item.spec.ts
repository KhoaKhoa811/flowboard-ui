import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberItem } from './team-member-item';

describe('TeamMemberItem', () => {
  let component: TeamMemberItem;
  let fixture: ComponentFixture<TeamMemberItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMemberItem],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamMemberItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
