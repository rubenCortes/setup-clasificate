import { TestBed, inject } from '@angular/core/testing';

import { DatosCategoriaService } from './datos-categoria.service';

describe('DatosCategoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosCategoriaService]
    });
  });

  it('should be created', inject([DatosCategoriaService], (service: DatosCategoriaService) => {
    expect(service).toBeTruthy();
  }));
});
