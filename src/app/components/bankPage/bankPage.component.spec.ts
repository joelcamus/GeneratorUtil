import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { BankPageComponent } from './bankPage.component';

describe('BankPageComponent', () => {
    let component: BankPageComponent;
    let fixture: ComponentFixture<BankPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BankPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BankPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
