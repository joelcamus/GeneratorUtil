import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { NifNieCifPageComponent } from './nifNieCifPage.component';
describe('NifNieCifPageComponent', () => {
  let component: NifNieCifPageComponent;
  let fixture: ComponentFixture<NifNieCifPageComponent>;

  beforeEach(waitForAsync(() => {
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
