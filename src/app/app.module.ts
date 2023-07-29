import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {taskReducer} from './providers/to_do.reducers'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ListComponent } from './list/list.component';
import { ToDoInputComponent } from './to-do-input/to-do-input.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ToDoInputComponent,
    ToDoItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      "tasks":taskReducer,
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
