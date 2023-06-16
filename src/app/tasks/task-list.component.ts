import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { TaskItem } from './task-item.dto';
import { NewTask } from './new-task.dto';
import { TaskService } from './task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

 //taskService = new TaskService();
  tasks = this.taskService.getAllTasks();

  newTask: NewTask = new NewTask();

  ngOnInit(): void {
    //var date: Date = new Date(this.route.snapshot.params['date']);
    var strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
  }

  add(taskNgForm: NgForm) {
    if (taskNgForm.touched == false) return;
    this.taskService.addTask(this.newTask);
    taskNgForm.reset();
  }

  remove(deleteItem: TaskItem) {
    var confirmation = confirm(
      'are you sure about removing this ' + deleteItem.title
    );
    if (confirmation) {
      this.taskService.removeTask(deleteItem);
    }
  }
}
