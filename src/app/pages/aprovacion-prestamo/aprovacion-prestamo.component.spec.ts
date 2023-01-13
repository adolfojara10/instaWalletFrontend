import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovacionPrestamoComponent } from './aprovacion-prestamo.component';

describe('AprovacionPrestamoComponent', () => {
  let component: AprovacionPrestamoComponent;
  let fixture: ComponentFixture<AprovacionPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovacionPrestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovacionPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
