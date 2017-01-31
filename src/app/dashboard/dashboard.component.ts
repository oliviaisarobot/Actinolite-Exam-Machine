import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    DataService
  ]
})

export class DashboardComponent implements OnInit {

  logOut() {
    console.log('logout success');
    this.router.navigateByUrl('/');
  }

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {

  }

}
