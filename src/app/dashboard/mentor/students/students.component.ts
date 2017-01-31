import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  users = [
    {
      id: '1',
      name: 'Joey Jo',
      cohort: 'Zerda',
      class: 'Lasers'
    },
    {
      id: '2',
      name: 'Angelika Kovacs',
      cohort: 'Zerda',
      class: 'Lasers'
    },
    {
      id: '4',
      name: 'Gomix Bela',
      cohort: 'Zerda',
      class: 'Lasers'
    },
    {
      id: '26',
      name: 'Random Student',
      cohort: 'Zerda',
      class: 'Lasers'
    },
    {
      id: '28',
      name: 'Green Fox',
      cohort: 'Zerda',
      class: 'Lasers'
    },
    {
      id: '30',
      name: 'Kis Vuk',
      cohort: 'Zerda',
      class: 'Lasers'
    },
    {
      id: '31',
      name: 'Typescript Addict',
      cohort: 'Zerda',
      class: 'Lasers'
    },
    {
      id: '33',
      name: 'Lazy Designer',
      cohort: 'Zerda',
      class: 'Lasers'
    }
  ];

  currentUser;
  username;

  openModal() {

  }

  changeClass() {

    // offers to change the class of the current student
    // sends PUT request to the USERS_CLASSES datatable to update student class
  }

  constructor() { }

  ngOnInit() {
  }

}
