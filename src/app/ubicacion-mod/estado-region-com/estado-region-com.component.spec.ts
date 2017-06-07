import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoRegionComComponent } from './estado-region-com.component';

describe('EstadoRegionComComponent', () => {
  let component: EstadoRegionComComponent;
  let fixture: ComponentFixture<EstadoRegionComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoRegionComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoRegionComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
