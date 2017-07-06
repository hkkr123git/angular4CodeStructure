import { Injectable } from "@angular/core";

@Injectable()
export class ApiURLConstants {
    private BASE_URL: string = 'http://google.com/';
    private API_URLS: Object = {
        start: 'startEngine',
        changePasscode: 'changePasscode'
    };

    getApiUrl(urlId: string) : string {
        return this.BASE_URL+this.API_URLS[urlId];
    }
}