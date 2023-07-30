import { createAction, props } from '@ngrx/store';
import { To_Do_Model } from './to_do.state';

const addTaskAction = createAction('ADD_TO_DO', props<To_Do_Model>());
const updateTaskAction = createAction('UPDATE_TO_DO', props<To_Do_Model>());
const deleteTaskAction = createAction('DELETE_TO_DO', props<To_Do_Model>());
const sortTaskAction = createAction('SORT_TO_DO', props<To_Do_Model>());


export const actions = {
  addTaskAction,
  updateTaskAction,
  deleteTaskAction,
  sortTaskAction,
};
