import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionRaizComponent } from './ubicacion-raiz.component';

describe('UbicacionRaizComponent', () => {
  let component: UbicacionRaizComponent;
  let fixture: ComponentFixture<UbicacionRaizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionRaizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionRaizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
