import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionDeudasComponent } from './administracion-deudas.component';

describe('AdministracionDeudasComponent', () => {
  let component: AdministracionDeudasComponent;
  let fixture: ComponentFixture<AdministracionDeudasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionDeudasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionDeudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
