import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../utils/apiService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  gotoDashboard(): void {
    this.apiService.doGet('http://www.mocky.io/v2/595e6d7710000091037c19e2');
      // let link = ['home/dashboard'];
      // this.router.navigate(link);
  }

}
