import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  users = [];

  constructor(private http: Http) { }

  fetchData() {
    return this.http.get('https://exam-machine.firebaseio.com/.json').map(
      (res) => res.json()
    );
  }

}
