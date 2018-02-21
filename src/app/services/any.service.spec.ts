import { TestBed, inject } from '@angular/core/testing';

import { AnyService } from './any.service';

describe('AnyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnyService]
    });
  });

  it('should be created', inject([AnyService], (service: AnyService) => {
    expect(service).toBeTruthy();
  }));
});
