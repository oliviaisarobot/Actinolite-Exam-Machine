import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [
    DataService
  ]
})

export class SignupComponent implements OnInit {

  message: '';
  hideAlert:boolean = true;
  dangerAlert:boolean = false;
  successAlert:boolean = false;

  response;

  sendUserData(newName: string, newEmail: string, newPass: string) {
    this.hideAlert = true;
    if (this.nonEmpty(newName) && this.nonEmpty(newEmail) && this.nonEmpty(newPass)) {
      this.dataService.userSignup(newName, newEmail, newPass)
      .toPromise()
      .then((data) => this.response = data)
      .then(() => this.navigate())
      .catch(this.handleError)
    } else {
      this.loadMessage('Input fields can not be empty.');
    }
  }

  // validateString(str) {
  //   let result = true;
  //   let allowed = "^[a-zA-Z0-9_]+$"
  //   str.forEach(function(letter){
  //     allowed.indexOf(letter)
  //   })
  // }

  nonEmpty(str) {
    if (str) {
      return true
    }
  }

  navigate() {
    if (this.response.result === 'success') {
      console.log('signup success');
      this.setClassSuccess(this.response.message);
      this.router.navigateByUrl('/');
    } else if (this.response.result === 'Fail') {
      console.log(this.response.message);
      this.setClassDanger(this.response.message);
      this.hideAlert = false;
    } else {
      this.setClassDanger('Unknown error occured.');
      this.hideAlert = false;
      console.log('signup error');
    }
  }

  toggleAlert() {
    if (this.hideAlert) {
      this.hideAlert = false;
    } else {
      this.hideAlert = true;
    }
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

  loadMessage(message) {
  }

  checkPass(newPass: string, rePass: string) {
    if (newPass != rePass) {
      this.setClassDanger('Passwords don\'t match!');
      this.hideAlert = false;
    } else {
      this.setClassSuccess('Passwords match!');
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {

  }

}
