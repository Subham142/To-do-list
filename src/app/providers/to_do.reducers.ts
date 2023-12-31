import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { To_Do_Model, tasks } from './to_do.state';
import { actions } from './to_do.actions';

export const taskReducer = createReducer(
  tasks,
  on(actions.addTaskAction, (state, task) => {
    return [...state, task];
  }),
  on(actions.updateTaskAction, (state, task) => {
    let tempTaskIndex = state.findIndex((t) => t.id == task.id);
    var tempStates = [...state];
    if (tempTaskIndex != -1) {
      tempStates[tempTaskIndex] = task;
    }
    return [...tempStates];
  }),
  on(actions.deleteTaskAction, (state, task) => {
    let tasks = state.filter((t) => t.id != task.id);
    return [...tasks];
  })
);

export const taskSelector = createSelector(
  createFeatureSelector('tasks'),
  (tasks: To_Do_Model[]) => tasks
);
