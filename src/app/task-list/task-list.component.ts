import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  newTaskTile: string = '';

  ngOnInit(): void {
    var date: Date = new Date(this.route.snapshot.params['date']);
    console.log(date);
  }

  tasks: Task[] = [
    new Task('List1'),
    new Task('List2'),
    new Task('List3'),
    new Task('List4'),
  ];

  add(taskNgForm: NgForm) {

    if (taskNgForm.touched == false) return;
    if (taskNgForm.valid == false) return;
    
    //this.tasks.push(new Task(newItem));
    this.tasks.push(new Task(this.newTaskTile));
    //this.newTaskTile = "";
    taskNgForm.reset();
  }

  remove(deleteItem: string) {
    var yea = confirm('are you sure about removing this ' + deleteItem);
    if (yea) {
      this.tasks = this.tasks.filter((t) => t.title != deleteItem);
    }
  }
}

class Task {
  constructor(public title: string) {}
  public isDone = false;

  toggleIsDone() {
    this.isDone = !this.isDone;
  }
}
