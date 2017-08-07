import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';

import { HomeRoutingModule } from './home.routing.module';
import { Util } from '../utils/util.service';
import { ApiURLConstants } from '../utils/apiUrlConstants.service';
import { ApiService } from '../utils/apiService.service';

import { HomeComponent } from '../home/home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HomeRoutingModule,
        DashboardModule
    ],
    providers: [
        Util,
        ApiURLConstants,
        ApiService
    ],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
