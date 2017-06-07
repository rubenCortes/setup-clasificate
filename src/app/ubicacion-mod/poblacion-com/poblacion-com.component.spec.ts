import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoblacionComComponent } from './poblacion-com.component';

describe('PoblacionComComponent', () => {
  let component: PoblacionComComponent;
  let fixture: ComponentFixture<PoblacionComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoblacionComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoblacionComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
