import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login/login.service';
import { Util } from './utils/util.service';
import { ApiURLConstants } from './utils/apiUrlConstants.service';
import { ApiService } from './utils/apiService.service';

import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HomeModule
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
