import { Component,Input,OnInit } from '@angular/core';
import {TaskModel,tasks} from '../providers/to_do.state'
@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.css']
})
export class ToDoInputComponent implements OnInit{
  ngOnInit(): void {

  }
}
