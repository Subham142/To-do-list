import { Component, Input, OnInit } from '@angular/core';
import { TaskModel, tasks } from '../providers/to_do.state';
import { Store } from '@ngrx/store';
import { actions } from '../providers/to_do.actions';
import { taskSelector } from '../providers/to_do.reducers';
import { state } from '@angular/animations';
@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.css'],
})
export class ToDoInputComponent implements OnInit {
  taskInput?: string;
  tasks?: TaskModel[];
  constructor(private store: Store) {}
  
  ngOnInit(): void {
    this.store.select(taskSelector).subscribe((state) => (this.tasks = state));
  }


  addTask() {
    if (this.taskInput != '' || this.taskInput != null)
      this.store.dispatch(
        actions.addTaskAction({
          id: this.tasks!.length + 1,
          completed: false,
          title: this.taskInput!,
        })
      );
    this.taskInput = '';
  }
}
