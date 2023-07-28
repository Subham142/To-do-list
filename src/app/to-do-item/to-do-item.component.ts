import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from '../providers/to_do.state';
@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() task?:TaskModel;
  editTask: boolean = false;
  constructor(){}
  
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
  
  }
}
