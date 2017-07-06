import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    doGet(url: string) {
        return this.http.get(url);
    }

    doPost(url: string, data: Object) {
        return this.http.post(url, data);
    }
}