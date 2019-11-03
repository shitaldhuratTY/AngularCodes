import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule }  from '@angular/common/http';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './filter.pipe';
import { ReducePipe } from './reduce.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    RegisterComponent,
    UserComponent,
    HeaderComponent,
    FilterPipe,
    ReducePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent },
      {path: 'news', component: NewsComponent },
      {path: 'register', component: RegisterComponent },
      {path: 'user', component: UserComponent },
      {path: 'reduce', component: ReducePipe},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
