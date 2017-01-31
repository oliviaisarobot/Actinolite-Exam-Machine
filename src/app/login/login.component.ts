import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    DataService
  ]
})

export class LoginComponent implements OnInit {

  message: '';
  dangerAlert:boolean = false;
  successAlert:boolean = false;

  response;
  height;

  verifyUser(loginUser: string, loginPass: string) {
    this.dataService.userLogin(loginUser, loginPass)
      .toPromise()
      .then((data) => this.response = data)
      .then(() => this.navigate())
      .catch(this.handleError);
  }

  navigate() {
    if (this.response.result === 'success') {
      console.log('login success');
      this.setClassSuccess(this.response.message);
      this.setStyle();
      this.router.navigateByUrl('/dashboard');
    } else if (this.response.result === 'fail') {
      this.setClassDanger(this.response.message);
      this.setStyle();
      console.log(this.response.message);
    } else {
      console.log('login error');
      this.setClassDanger('An unknown error occured.');
      this.setStyle();
    }
  }

  setStyle() {
    this.height = 'auto';
  }

  setClassDanger(message) {
    this.message = message;
    this.dangerAlert = true;
    this.successAlert = false;
  }

  setClassSuccess(message) {
    this.message = message;
    this.successAlert = true;
    this.dangerAlert = false;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }
}
