import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    DataService
  ]
})

export class LoginComponent implements OnInit {

  users = [];

  checkUser(loginUser: string, loginPass: string) {
    let temp = this.users.slice(1);
    console.log(temp);
    // console.log(this.users);
    let result = false;
    // let user;
    temp.forEach(function(e) {
      // console.log(e);
      if (e.username === loginUser) {
        if (e.password === loginPass) {
          result = true;
          // user = e;
        }
      }
    })
    if (result) {
      console.log('login success');
      this.router.navigateByUrl('/dashboard');
    } else {
      console.log('login error')
    }
  }

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.users = data,
    );
  }
}
