import { TestBed } from '@angular/core/testing';

import { SimuladorwsService } from './simuladorws.service';

describe('SimuladorwsService', () => {
  let service: SimuladorwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimuladorwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
