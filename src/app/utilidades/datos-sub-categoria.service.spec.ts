import { TestBed, inject } from '@angular/core/testing';

import { DatosSubCategoriaService } from './datos-sub-categoria.service';

describe('DatosSubCategoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosSubCategoriaService]
    });
  });

  it('should be created', inject([DatosSubCategoriaService], (service: DatosSubCategoriaService) => {
    expect(service).toBeTruthy();
  }));
});
