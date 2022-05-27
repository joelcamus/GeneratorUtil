import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { SecondService } from './service/clock/secondService.service';
import { HomePageComponent } from './components/homePage/homePage.component';
import { MenuComponent } from './components/menu/menu.component';
import { NifNieCifPageComponent } from './components/nifNieCifPage/nifNieCifPage.component';
import { BankPageComponent } from './components/bankPage/bankPage.component';
import { LicensePlatePageComponent } from './components/licensePlatePage/licensePlatePage.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    HomePageComponent,
    NifNieCifPageComponent,
    BankPageComponent,
    LicensePlatePageComponent,
    MenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MenuComponent,
    NifNieCifPageComponent,
    BankPageComponent,
    LicensePlatePageComponent,
    SecondService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
