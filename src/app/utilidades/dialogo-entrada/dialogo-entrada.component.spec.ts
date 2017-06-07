import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEntradaComponent } from './dialogo-entrada.component';

describe('DialogoEntradaComponent', () => {
  let component: DialogoEntradaComponent;
  let fixture: ComponentFixture<DialogoEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
