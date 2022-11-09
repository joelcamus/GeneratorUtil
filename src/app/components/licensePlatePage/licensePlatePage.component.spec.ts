import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { LicensePlatePageComponent } from './licensePlatePage.component';

describe('LicensePlatePageComponent', () => {
    let component: LicensePlatePageComponent;
    let fixture: ComponentFixture<LicensePlatePageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LicensePlatePageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LicensePlatePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
