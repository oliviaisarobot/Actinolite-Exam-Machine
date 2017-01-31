import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

  message: '';
  showAlert:boolean = false;
  dangerAlert:boolean = false;
  successAlert:boolean = false;

  toggleAlert() {
    if (this.showAlert) {
      this.showAlert = false;
    } else {
      this.showAlert = true;
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

  constructor() { }

}
