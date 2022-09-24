import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastelHttpComponent } from './pastel-http.component';

describe('PastelHttpComponent', () => {
  let component: PastelHttpComponent;
  let fixture: ComponentFixture<PastelHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastelHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastelHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
