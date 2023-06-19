import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { TaskTableComponent } from '../task-table/task-table.component';

@NgModule({
  declarations: [TaskListComponent, TaskTableComponent],
  providers: [TaskService],
  imports: [CommonModule, FormsModule],
  exports: [TaskListComponent],
})
export class TasksModule {}
