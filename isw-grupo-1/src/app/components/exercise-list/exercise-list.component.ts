import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
  }

  onDeliverEatClick() {
    this.router.navigate([ '/delivereat' ]);
  }
}
