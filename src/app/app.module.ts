import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/homePage/homePage.component';
import { MenuComponent } from './components/menu/menu.component';
import { NifNieCifPageComponent } from './components/nifNieCifPage/nifNieCifPage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NifNieCifPageComponent,
    MenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ MenuComponent, NifNieCifPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
