import { TestBed } from '@angular/core/testing';

import { CrearCuentaServiceService } from './crear-cuenta-service.service';

describe('CrearCuentaServiceService', () => {
  let service: CrearCuentaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearCuentaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
