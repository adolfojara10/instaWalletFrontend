import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorAhorrosComponent } from './simulador-ahorros.component';

describe('SimuladorAhorrosComponent', () => {
  let component: SimuladorAhorrosComponent;
  let fixture: ComponentFixture<SimuladorAhorrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimuladorAhorrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladorAhorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
