import { createAction, props } from '@ngrx/store';
import { ITask } from 'src/app/interfaces/task.interface';

export const loadTasks = createAction('[Task] Load Tasks');

export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: ITask[] }>()
);

export const createTask = createAction(
  '[Task] Create Task',
  props<{ task: ITask }>()
);

export const createTaskSuccess = createAction(
  '[Task] Create Task Success',
  props<{ task: ITask }>()
);

export const createTaskFailure = createAction(
  '[Task] Create Task Failure',
  props<{ error: any }>()
);

export const updataStatusTask = createAction(
  '[Task] Update Status Task',
  props<{ task: ITask }>()
);
