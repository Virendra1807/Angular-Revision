import { TestBed } from '@angular/core/testing';

import { ProductsDetails } from './products-details';

describe('ProductsDetails', () => {
  let service: ProductsDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
