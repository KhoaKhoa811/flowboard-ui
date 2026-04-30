import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDialog } from './shared-dialog';

describe('SharedDialog', () => {
  let component: SharedDialog;
  let fixture: ComponentFixture<SharedDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
