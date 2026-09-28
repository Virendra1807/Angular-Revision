import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenForms } from './template-driven-forms';

describe('TemplateDrivenForms', () => {
  let component: TemplateDrivenForms;
  let fixture: ComponentFixture<TemplateDrivenForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenForms],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
