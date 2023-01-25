import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaditoManagementComponent } from './creadito-management.component';

describe('CreaditoManagementComponent', () => {
  let component: CreaditoManagementComponent;
  let fixture: ComponentFixture<CreaditoManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaditoManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaditoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
