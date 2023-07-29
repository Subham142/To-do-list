import { Component, OnInit,Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskModel } from '../providers/to_do.state';
import { taskSelector } from '../providers/to_do.reducers';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { actions } from '../providers/to_do.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() task?: TaskModel;
  editTask: boolean = false;
  tasks: TaskModel[] = [];
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.loadTask();
    this.editTask = this.task!.completed;
  }
  loadTask() {
    this.store.select(taskSelector).subscribe((state) => (this.tasks = state));
  }

  downloadCsv() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Task Report',
      useBom: true,

      headers: [
        'ID',
        'Title',
        'Description',
        'Deadline',
        'Priority',
        'Task Taken By',
        'Status',
      ],
    };

    new ngxCsv(this.tasks, 'report', options);
  }

  sortByDate() {
    this.tasks = this.tasks
      .slice()
      .sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      );
  }
  sortPriorityAse() {
    this.tasks = this.tasks.slice().sort((a, b) => a.priority - b.priority);
  }
  sortPriorityDsc() {
    this.tasks = this.tasks.slice().sort((a, b) => b.priority - a.priority);
  }
  sortStatusAse() {
    this.tasks = this.tasks.slice().sort((a, b) => a.status - b.status);
  }
  sortStatusDsc() {
    this.tasks = this.tasks.slice().sort((a, b) => b.status - a.status);
  }
  deleteTask(del_task : TaskModel) {
    if(del_task!.id === undefined) {return}
    this.store.dispatch(
      actions.deleteTaskAction({
        id: del_task!.id,
        completed: del_task!.completed,
        title: del_task!.title,
        description: del_task!.description,
        dueDate: del_task!.dueDate,
        priority: del_task!.priority,
        status: del_task!.status,
        takenBy: del_task!.takenBy,
      })
    );
  }
}
