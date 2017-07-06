import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    signIn: any = 'hello';
    title = 'App 567';

    constructor(private router: Router) { }

    
    gotoLogin(): void {
        let link = ['/login'];
        this.router.navigate(link);
    }

}
