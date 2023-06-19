import { Injectable } from '@angular/core';
import { TaskItem } from './task-item.dto';
import { NewTask } from './new-task.dto';
import { Observable, BehaviorSubject } from 'rxjs';

/*@Injectable({
  providedIn: 'root',
})*/

export class TaskService {
  constructor() {}

  private tasks = new BehaviorSubject([
    new TaskItem('List1'),
    new TaskItem('List2'),
    new TaskItem('List3'),
    new TaskItem('List4'),
  ]);

  getAllTasks(): Observable<TaskItem[]> {
    return this.tasks;
  }

  addTask(newTask: NewTask) {
    //throw new Error('addTask Not implemented yet!');
    //this.tasks.push(new TaskItem(newTask.title));
    var updatedTasks = this.tasks.value.concat(new TaskItem(newTask.title));
    this.tasks.next(updatedTasks);
  }

  removeTask(existingTask: TaskItem) {
    var updated = this.tasks.value.filter((t) => t != existingTask);
    this.tasks.next(updated);
    /* const index = this.tasks.indexOf(existingTask);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }*/
  }
}
