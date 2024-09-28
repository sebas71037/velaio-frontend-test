import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Observable, Subscription, take, tap } from 'rxjs';
import { EFilterTask } from 'src/app/enum/filter-task.enum';
import { ITask } from 'src/app/interfaces/task.interface';
import { loadTasks, updataStatusTask } from 'src/app/store/task/task.actions';
import { loadingTasks, selectAllTasks, selectCompletedTasks, selectPendingTasks } from 'src/app/store/task/task.selector';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  private filterConfig = {
    [EFilterTask.ALL]: selectAllTasks,
    [EFilterTask.COMPLETE]: selectCompletedTasks,
    [EFilterTask.PENDING]: selectPendingTasks
  };

  tasks$: Observable<ITask[]> = this.store.select(selectAllTasks);
  loading$: Observable<boolean> = this.store.select(loadingTasks);

  eFilterTask = EFilterTask;
  existsTasks: boolean = false;
  subcription!: Subscription;

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.select(selectAllTasks).pipe(
      take(1),
      filter(tasks => tasks.length === 0),
      tap(() => this.store.dispatch(loadTasks()))
    ).subscribe();
    this.listenerFilteredTasks();
  }

  public filterTasks(filter: EFilterTask): void {
    this.tasks$ = this.store.select(this.filterConfig[filter]);
    this.listenerFilteredTasks();
  }

  private listenerFilteredTasks(): void {
    if (this.subcription) this.subcription.unsubscribe();

    this.subcription = this.tasks$.subscribe(tasks => {
      this.existsTasks = tasks.length > 0;
    });
  }

  public updateStatus(task: ITask) {
    this.store.dispatch(updataStatusTask({task}));
  }
}
