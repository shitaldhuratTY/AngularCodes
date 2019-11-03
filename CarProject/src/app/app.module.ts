import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { LoginComponent } from './login/login.component';
import { LoginDetailsComponent } from './login-details/login-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    CarDetailsComponent,
    DataBindingComponent,
    LoginComponent,
    LoginDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'car', component: CarsComponent},
      { path: 'card', component: CarDetailsComponent},
      { path: 'login', component: LoginComponent},
      { path: 'logind', component: LoginDetailsComponent},

    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
