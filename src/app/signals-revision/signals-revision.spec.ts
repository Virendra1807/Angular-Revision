import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsRevision } from './signals-revision';

describe('SignalsRevision', () => {
  let component: SignalsRevision;
  let fixture: ComponentFixture<SignalsRevision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsRevision],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsRevision);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
