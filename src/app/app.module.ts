import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { LoginService } from './login/login.service';
import { Util } from './utils/util.service';
import { ApiURLConstants } from './utils/apiUrlConstants.service';
import { ApiService } from './utils/apiService.service';

import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './home/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      AppRoutingModule
  ],
  providers: [
    LoginService,
    Util,
    ApiURLConstants,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
