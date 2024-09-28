import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeAll, Observable, of, timer } from 'rxjs';
import { ITask } from 'src/app/interfaces/task.interface';
import { getTasksList } from 'src/app/data/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private apiUrl = 'https://api.example.com/tasks';

  constructor(
    private http: HttpClient
  ) {}

  public getTasks(): Observable<ITask[]> {
    return timer(1500).pipe(map(() => getTasksList()));
  }

  public createTask(task: ITask): Observable<any> {
    return timer(1500).pipe(map(() => task));
  }

}
