import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateNifNifCifComponent } from './validate-nif-nif-cif.component';

describe('ValidateNifNifCifComponent', () => {
  let component: ValidateNifNifCifComponent;
  let fixture: ComponentFixture<ValidateNifNifCifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateNifNifCifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateNifNifCifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
