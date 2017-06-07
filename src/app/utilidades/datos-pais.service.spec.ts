import { TestBed, inject } from '@angular/core/testing';

import { DatosPaisService } from './datos-pais.service';

describe('DatosPaisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosPaisService]
    });
  });

  it('should ...', inject([DatosPaisService], (service: DatosPaisService) => {
    expect(service).toBeTruthy();
  }));
});
