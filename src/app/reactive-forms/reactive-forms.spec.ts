import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForms } from './reactive-forms';

describe('ReactiveForms', () => {
  let component: ReactiveForms;
  let fixture: ComponentFixture<ReactiveForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveForms],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
