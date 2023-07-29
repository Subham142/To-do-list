import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { taskReducer } from './providers/to_do.reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ListComponent } from './list/list.component';
import { ToDoInputComponent } from './to-do-input/to-do-input.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, ListComponent, ToDoInputComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tasks: taskReducer,
    }),
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
