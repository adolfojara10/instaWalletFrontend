import { TestBed } from '@angular/core/testing';

import { DeudaswsService } from './deudasws.service';

describe('DeudaswsService', () => {
  let service: DeudaswsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeudaswsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
