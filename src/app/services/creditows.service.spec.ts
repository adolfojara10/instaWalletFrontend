import { TestBed } from '@angular/core/testing';

import { CreditowsService } from './creditows.service';

describe('CreditowsService', () => {
  let service: CreditowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
