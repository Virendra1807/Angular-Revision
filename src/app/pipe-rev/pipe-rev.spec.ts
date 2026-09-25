import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeRev } from './pipe-rev';

describe('PipeRev', () => {
  let component: PipeRev;
  let fixture: ComponentFixture<PipeRev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeRev],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeRev);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
