import { TestBed } from '@angular/core/testing';

import { EstadocwsService } from './estadocws.service';

describe('EstadocwsService', () => {
  let service: EstadocwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadocwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
