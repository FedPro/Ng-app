import { Injectable } from '@angular/core';
import { TaskItem } from './task-item.dto';
import { NewTask } from './new-task.dto';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  private tasks: TaskItem[] = [
    new TaskItem('List1'),
    new TaskItem('List2'),
    new TaskItem('List3'),
    new TaskItem('List4'),
  ];

  getAllTasks(): TaskItem[] {
    return this.tasks;
  }

  addTask(newTask: NewTask) {
    //throw new Error('addTask Not implemented yet!');
    this.tasks.push(new TaskItem(newTask.title));
  }

  removeTask(existingTask: TaskItem) {
    const index = this.tasks.indexOf(existingTask);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
