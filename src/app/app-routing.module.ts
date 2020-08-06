import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/homePage/homePage.component';
import { NifNieCifPageComponent } from './components/nifNieCifPage/nifNieCifPage.component';
import { BankPageComponent } from './components/bankPage/bankPage.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'nifNieCif',
    component: NifNieCifPageComponent
  },
  {
    path: 'bank',
    component: BankPageComponent
  },
  {
	path: '**', 
	redirectTo: '/home'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
