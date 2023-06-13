import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  tasks: Task[] = [
    new Task('List1'),
    new Task('List2'),
    new Task('List3'),
    new Task('List4'),
  ];

  add(newItem: string) {
    //alert(newItem)
    this.tasks.push(new Task(newItem));
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
