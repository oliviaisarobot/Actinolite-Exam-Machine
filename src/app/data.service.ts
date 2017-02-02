import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class DataService {

  constructor(private http: Http) { }

  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  userLogin(email, password) {
    return this.http.post('/user/login', {email: email, password: password}, {headers: this.headers})
      .map((res) => res.json());
  }

  // fetchData(email) {
  //   return this.http.post('https://exam-machine-backend.gomix.me', {email: email})
  //     .map((res) => res.json());
  // }

  userSignup(name, email, password) {
    return this.http.post('/user/signup', {name: name, email: email, password: password}, {headers: this.headers})
      .map((res) => res.json())
  }

}
