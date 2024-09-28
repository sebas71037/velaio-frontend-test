import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from '../../services/task/task.service';
import { createTask, createTaskSuccess, createTaskFailure, loadTasks, loadTasksSuccess } from './task.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TaskEffects {
  
  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map(tasks => loadTasksSuccess({ tasks }))
        )
      )
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTask),
      mergeMap(action =>
        this.taskService.createTask(action.task).pipe(
          map(task => createTaskSuccess({ task })),
          catchError(error => of(createTaskFailure({ error })))
        )
      )
    )
  );
  
}
