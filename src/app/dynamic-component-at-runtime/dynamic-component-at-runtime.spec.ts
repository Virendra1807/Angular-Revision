import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentAtRuntime } from './dynamic-component-at-runtime';

describe('DynamicComponentAtRuntime', () => {
  let component: DynamicComponentAtRuntime;
  let fixture: ComponentFixture<DynamicComponentAtRuntime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicComponentAtRuntime],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicComponentAtRuntime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
