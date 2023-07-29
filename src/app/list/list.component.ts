import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskModel } from '../providers/to_do.state';
import { taskSelector } from '../providers/to_do.reducers';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  tasks: TaskModel[] = [];
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.loadTask();
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
}
