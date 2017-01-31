import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  exams = [
    {
      id: '1',
      name: 'JavaScript',
      mentor: 'Envagyok Béla',
      cohort: 'Zerda',
      class: 'Lasers'
    },
    {
      id: '2',
      name: 'C++',
      mentor: 'Nemvagyok Béla',
      cohort: 'Zerda',
      class: 'Sparta'
    },
    {
      id: '3',
      name: 'Java',
      mentor: 'Enpedig Juli',
      cohort: 'Zerda',
      class: 'Raptor'
    }
  ];

  cohorts = [
    {
      id: '1',
      name: 'Zerda'
    },
    {
      id: '2',
      name: 'Velox'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
