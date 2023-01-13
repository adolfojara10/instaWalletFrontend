import { TestBed } from '@angular/core/testing';

import { AprovacionwsService } from './aprovacionws.service';

describe('AprovacionwsService', () => {
  let service: AprovacionwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprovacionwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
