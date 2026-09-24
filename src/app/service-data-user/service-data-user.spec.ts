import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDataUser } from './service-data-user';

describe('ServiceDataUser', () => {
  let component: ServiceDataUser;
  let fixture: ComponentFixture<ServiceDataUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDataUser],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceDataUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
