import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriaComponent } from './sub-categoria.component';

describe('SubCategoriaComponent', () => {
  let component: SubCategoriaComponent;
  let fixture: ComponentFixture<SubCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
