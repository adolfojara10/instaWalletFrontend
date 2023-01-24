import { TestBed } from '@angular/core/testing';

import { DetalleCuentaService } from './detalle-cuenta.service';

describe('DetalleCuentaService', () => {
  let service: DetalleCuentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleCuentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
