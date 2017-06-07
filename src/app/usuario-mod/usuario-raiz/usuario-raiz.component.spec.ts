import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRaizComponent } from './usuario-raiz.component';

describe('UsuarioRaizComponent', () => {
  let component: UsuarioRaizComponent;
  let fixture: ComponentFixture<UsuarioRaizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioRaizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRaizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
