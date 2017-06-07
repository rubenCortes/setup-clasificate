import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaRaizComponent } from './categoria-raiz.component';

describe('CategoriaRaizComponent', () => {
  let component: CategoriaRaizComponent;
  let fixture: ComponentFixture<CategoriaRaizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaRaizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaRaizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
