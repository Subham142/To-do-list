import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { To_Do_Model } from '../providers/to_do.state';
import { taskSelector } from '../providers/to_do.reducers';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { actions } from '../providers/to_do.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  // @Input() task?: To_Do_Model;
  editTask: boolean = false;
  tasks: To_Do_Model[] = [];
  constructor(private store: Store) {}
  
  ngOnInit(): void {
    this.loadTo_dos();
    // this.editTask = this.task!.completed;
  }
  loadTo_dos() {
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

  sort_By_Date() {
    this.tasks = this.tasks
      .slice()
      .sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      );
  }
  sort_Priority_Ase() {
    this.tasks = this.tasks.slice().sort((a, b) => a.priority - b.priority);
  }
  sort_Priority_Dsc() {
    this.tasks = this.tasks.slice().sort((a, b) => b.priority - a.priority);
  }
  sort_Status_Ase() {
    this.tasks = this.tasks.slice().sort((a, b) => a.status - b.status);
  }
  sort_Status_Dsc() {
    this.tasks = this.tasks.slice().sort((a, b) => b.status - a.status);
  }

  deleteTask(del_task: To_Do_Model) {
    if (del_task!.id === undefined) {
      return;
    }
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
