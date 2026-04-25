import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAvatar } from './default-avatar';

describe('DefaultAvatar', () => {
  let component: DefaultAvatar;
  let fixture: ComponentFixture<DefaultAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultAvatar],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultAvatar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
