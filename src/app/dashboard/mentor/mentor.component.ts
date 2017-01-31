import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoadingComponent } from '../../loading/loading.component';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
  name = 'My Dearest Mentor';

  navigate(page) {
    this.router.navigateByUrl('/dashboard' + page);
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/dashboard/unassigned');
  }

}
