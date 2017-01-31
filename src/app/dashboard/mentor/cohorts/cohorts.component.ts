import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cohorts',
  templateUrl: './cohorts.component.html',
  styleUrls: ['./cohorts.component.css']
})
export class CohortsComponent implements OnInit {

  cohorts = [
    {
      name: "Zerda"
    },
    {
      name: "Vellox"
    },
    {
      name: "Boti"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
