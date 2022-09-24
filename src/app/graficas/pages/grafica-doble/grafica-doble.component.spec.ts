import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaDobleComponent } from './grafica-doble.component';

describe('GraficaDobleComponent', () => {
  let component: GraficaDobleComponent;
  let fixture: ComponentFixture<GraficaDobleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaDobleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaDobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
