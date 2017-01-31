import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unassigned',
  templateUrl: './unassigned.component.html',
  styleUrls: ['./unassigned.component.css']
})
export class UnassignedComponent implements OnInit {

  unassigned = [
    {
      id: '1',
      name: 'Classless Jenny',
      cohort: 'Zerda',
      class: 'Lasers'
    },
    {
      id: '2',
      name: 'Sad Panda',
      cohort: 'Zerda',
      class: 'Lasers'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
