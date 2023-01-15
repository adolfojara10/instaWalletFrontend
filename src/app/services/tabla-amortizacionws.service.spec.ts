import { TestBed } from '@angular/core/testing';

import { TablaAmortizacionwsService } from './tabla-amortizacionws.service';

describe('TablaAmortizacionwsService', () => {
  let service: TablaAmortizacionwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaAmortizacionwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
