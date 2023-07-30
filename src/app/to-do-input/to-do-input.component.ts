import { Component, Input, OnInit } from '@angular/core';
import { To_Do_Model, tasks } from '../providers/to_do.state';
import { Store } from '@ngrx/store';
import { actions } from '../providers/to_do.actions';
import { taskSelector } from '../providers/to_do.reducers';
import { state } from '@angular/animations';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.css'],
})
export class ToDoInputComponent implements OnInit {
  taskInput?: string;
  tasks?: To_Do_Model[];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(taskSelector).subscribe((state) => (this.tasks = state));
  }
  onSubmit(form: NgForm) {
    console.log(form);
    //     let item_id = this.tasks!.length+1 | 1;
    // localStorage.setItem('item_id',JSON.stringify(form));
    this.store.dispatch(
      actions.addTaskAction({
        id: this.tasks!.length + 1,
        completed: false,
        title: form.controls['task-title'].value,
        description: form.controls['task-desc'].value,
        priority: form.controls['task-priority'].value,
        dueDate: form.controls['task-date'].value,
        status: 1,
        takenBy: '',
      })
    );

    form.reset();
  }
}
