import { TestBed, inject } from '@angular/core/testing';

import { DatosEstadoRegionService } from './datos-estado-region.service';

describe('DatosEstadoRegionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosEstadoRegionService]
    });
  });

  it('should ...', inject([DatosEstadoRegionService], (service: DatosEstadoRegionService) => {
    expect(service).toBeTruthy();
  }));
});
