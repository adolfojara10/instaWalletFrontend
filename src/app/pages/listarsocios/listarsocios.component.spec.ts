import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarsociosComponent } from './listarsocios.component';

describe('ListarsociosComponent', () => {
  let component: ListarsociosComponent;
  let fixture: ComponentFixture<ListarsociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarsociosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarsociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
