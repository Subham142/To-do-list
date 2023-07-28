import { createAction, props } from "@ngrx/store";
import { TaskModel } from "./to_do.state";

const addTaskAction = createAction("[TASK] ADD_TASK", props<TaskModel>())
const updateTaskAction = createAction("[TASK] UPDATE_TASK", props<TaskModel>())
const deleteTaskAction = createAction("[TASK] DELETE_TASK", props<TaskModel>())

export const actions ={addTaskAction,updateTaskAction,deleteTaskAction};