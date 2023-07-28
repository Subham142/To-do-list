import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from '../providers/to_do.state';
import { actions } from '../providers/to_do.actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() task?:TaskModel;
  editTask: boolean = false;
  constructor( private store:Store){}
  
    ngOnInit(): void {
    console.log("task"+this.task!.id)
      this.editTask= this.task!.completed;
      
  }
  updateToggle(){
    this.editTask=!this.editTask;
  }
  updateTask(){
  
  }
  deleteTask(){
    this.store.dispatch(actions.deleteTaskAction({
      id:this.task!.id,
      completed:this.task!.completed,
      title:this.task!.title,
    }))
    }
}
