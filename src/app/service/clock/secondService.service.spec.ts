import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SecondService } from './secondService.service';

describe('SecondService', () => {
  let component: SecondService;
  let fixture: ComponentFixture<SecondService>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SecondService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
