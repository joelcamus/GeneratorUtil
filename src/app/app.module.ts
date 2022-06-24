import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { SecondService } from './components/clock/secondService.service';
import { HomePageComponent } from './components/homePage/homePage.component';
import { MenuComponent } from './components/menu/menu.component';
import { NifNieCifPageComponent } from './components/nifNieCifPage/nifNieCifPage.component';
import { BankPageComponent } from './components/bankPage/bankPage.component';
import { LicensePlatePageComponent } from './components/licensePlatePage/licensePlatePage.component';
import { ValidateNifNifCifComponent } from './components/validate-nif-nif-cif/validate-nif-nif-cif.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    HomePageComponent,
    NifNieCifPageComponent,
    BankPageComponent,
    LicensePlatePageComponent,
    MenuComponent,
    ValidateNifNifCifComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
