import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisComComponent } from './pais-com.component';

describe('PaisComComponent', () => {
  let component: PaisComComponent;
  let fixture: ComponentFixture<PaisComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
