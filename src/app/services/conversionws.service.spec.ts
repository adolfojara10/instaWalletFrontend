import { TestBed } from '@angular/core/testing';

import { ConversionwsService } from './conversionws.service';

describe('ConversionwsService', () => {
  let service: ConversionwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
