import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaElementoComponent } from './lista-elemento.component';

describe('ListaElementoComponent', () => {
  let component: ListaElementoComponent;
  let fixture: ComponentFixture<ListaElementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaElementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
