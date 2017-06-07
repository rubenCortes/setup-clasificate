import { TestBed, inject } from '@angular/core/testing';

import { DatosPoblacionService } from './datos-poblacion.service';

describe('DatosPoblacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosPoblacionService]
    });
  });

  it('should ...', inject([DatosPoblacionService], (service: DatosPoblacionService) => {
    expect(service).toBeTruthy();
  }));
});
