import { TestBed } from '@angular/core/testing';

import { HttpTestServiceService } from './http-test-service.service';

describe('HttpTestServiceService', () => {
  let service: HttpTestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
