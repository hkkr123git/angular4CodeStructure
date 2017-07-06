import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { LoginService } from 'services/login/login.service';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    signIn: string = 'hello';

    constructor(private router: Router,
        private loginService: LoginService
    ) { }

    ngOnInit() {
        console.log(this.loginService.cars);
        console.log(this.loginService.myData());
        //this.someProperty = this.loginService.myData();
  }

  gotoDetail(): void {
      let link = ['/home'];
      this.router.navigate(link);
  }

}
