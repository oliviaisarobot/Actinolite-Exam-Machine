import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  users = [
    {
      id: '1',
      name: 'Lil Wayne',
      class: 'Lasers',
      cohort: 'Zerda',
      exam: 'HTML/CSS',
      result: '55'
    },
    {
      id: '2',
      name: 'Nicki Minaj',
      class: 'Sparta',
      cohort: 'Zerda',
      exam: 'C++ retake',
      result: '67'
    },
    {
      id: '3',
      name: '50 Cent',
      class: 'Lasers',
      cohort: 'Zerda',
      exam: 'JavaScript',
      result: '99'
    },
    {
      id: '4',
      name: 'Eminem',
      class: 'Raptor',
      cohort: 'Zerda',
      exam: 'Java',
      result: '94'
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
