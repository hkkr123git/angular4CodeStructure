import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from '../home.routing.module';
import { Util } from '../../utils/util.service';
import { ApiURLConstants } from '../../utils/apiUrlConstants.service';
import { ApiService } from '../../utils/apiService.service';

import { DashboardComponent } from '../../home/dashboard/dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HomeRoutingModule
    ],
    providers: [
        Util,
        ApiURLConstants,
        ApiService
    ],
    bootstrap: [DashboardComponent]
})
export class DashboardModule { }
