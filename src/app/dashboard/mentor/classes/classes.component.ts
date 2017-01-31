import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  cohorts = [{name: "Zerda"}, {name: "Velox"}];



  classes = [
    {
      name : "Laser",
      cohort: "Zerda"
    },
    { name: "Sparta",
      cohort: "Zerda"
    },
    {
      name: "Raptor",
      cohort: "Zerda"
    },
    {
      name: "Valami",
      cohort: "Velox"
    }
];

  constructor() { }

  ngOnInit() {
  }

}
