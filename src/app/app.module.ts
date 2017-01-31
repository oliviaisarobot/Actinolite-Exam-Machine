import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

// import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService), // fake web api
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'dashboard', component: DashboardComponent }
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
