import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NifNieCifPageComponent } from './nifNieCifPage.component';
describe('NifNieCifPageComponent', () => {
  let component: NifNieCifPageComponent;
  let fixture: ComponentFixture<NifNieCifPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NifNieCifPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NifNieCifPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
