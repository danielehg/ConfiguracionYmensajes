import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaLetraComponent } from './ventana-letra.component';

describe('VentanaLetraComponent', () => {
  let component: VentanaLetraComponent;
  let fixture: ComponentFixture<VentanaLetraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaLetraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaLetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
