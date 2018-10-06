import { TestBed } from '@angular/core/testing';

import { JugadoesService } from './jugadoes.service';

describe('JugadoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JugadoesService = TestBed.get(JugadoesService);
    expect(service).toBeTruthy();
  });
});
