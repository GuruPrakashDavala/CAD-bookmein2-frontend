import { TestBed } from '@angular/core/testing';

import { Bookmein2APIService } from './bookmein2-api.service';

describe('Bookmein2APIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Bookmein2APIService = TestBed.get(Bookmein2APIService);
    expect(service).toBeTruthy();
  });
});
