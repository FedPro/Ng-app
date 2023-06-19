import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';

@NgModule({
  declarations: [TaskListComponent],
  providers: [TaskService],
  imports: [CommonModule, FormsModule],
  exports: [TaskListComponent],
})
export class TasksModule {}
