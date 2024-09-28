import { createReducer, on } from '@ngrx/store';
import { createTaskSuccess, createTaskFailure, loadTasksSuccess, createTask, updataStatusTask } from './task.actions';
import { ITask } from 'src/app/interfaces/task.interface';

export interface TaskState {
  tasks: ITask[];
  loading: boolean;
  /* Creation */
  task?: ITask;
  create_loader: boolean;
  error: any;
}

export const initialState: TaskState = {
  tasks: [],
  task: undefined,
  loading: true,
  create_loader: false,
  error: null
};

export const taskReducer = createReducer(
  initialState,
  on(loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    loading: false,
    tasks
  })),
  on(createTask, (state, { task }) => ({
    ...state,
    create_loader: true,
    task
  })),
  on(createTaskSuccess, (state, { task }) => ({
    ...state,
    loading: false,
    create_loader: false,
    tasks: [task, ...state.tasks],
    error: null
  })),
  on(createTaskFailure, (state, { error }) => ({
    ...state,
    loading: false,
    create_loader: false,
    error
  })),
  on(updataStatusTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t =>
      t.id === task.id
        ? { ...t, status: !task.status }
        : t
    )
  }))
);
