import { Injectable } from '@angular/core';

@Injectable()
export class Util {

    constructor() { }

    getCurrentDate() {
        return new Date();
    }

}
