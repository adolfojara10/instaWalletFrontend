import { TestBed } from '@angular/core/testing';

import { TransferenciaswsService } from './transferenciasws.service';

describe('TransferenciaswsService', () => {
  let service: TransferenciaswsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferenciaswsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
