/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { BusinessService } from './Business.service';

describe('Service: Business', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessService]
    });
  });

  it('should ...', inject([BusinessService], (service: BusinessService) => {
    expect(service).toBeTruthy();
  }));
});
