import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LogicComponent } from './logic/logic.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { PageNtFoundComponent } from './page-nt-found/page-nt-found.component';
import { from } from 'rxjs';
import { Child1Component } from './child1/child1.component';
import { Child3Component } from './child3/child3.component';
import { Child2Component } from './child2/child2.component';
import { FooterComponent } from './footer/footer.component';

import { MyFormComponent } from './my-form/my-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LogicComponent,
    RegisterComponent,
    AboutComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    PageNtFoundComponent,
    FooterComponent,
   
    MyFormComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent, children : [

          { path: 'child1', component: Child1Component },
          { path: 'child2', component: Child2Component },
          { path: 'child3', component: Child3Component }

        ]},

      { path: 'login', component: LogicComponent },
      { path: 'register', component: RegisterComponent },
      
      { path : '*', component: PageNtFoundComponent }
    ]), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
