import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosIndicadoresComponent } from './precios-indicadores.component';

describe('PreciosIndicadoresComponent', () => {
  let component: PreciosIndicadoresComponent;
  let fixture: ComponentFixture<PreciosIndicadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosIndicadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
