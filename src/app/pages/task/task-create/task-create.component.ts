import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IControlField } from 'src/app/interfaces/control-field.interface';
import { createTask } from 'src/app/store/task/task.actions';
import { controlFields } from './form';
import { ITask } from 'src/app/interfaces/task.interface';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { loadingCreateTask } from 'src/app/store/task/task.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {
  
  formFields: IControlField = controlFields;
  taskForm!: FormGroup;
  loading$: Observable<boolean> = this.store.select(loadingCreateTask);
  first: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) { }
  
  private build(): void {
    this.taskForm = this.fb.group(this.formFields.fields);
  }

  ngOnInit(): void {
    this.build();

    this.loading$.subscribe(loader => {
      if (!this.first) {
        this.first = true;
        return;
      }

      if (loader == false) this.router.navigate(['/tasks']);
    });
  }

  public saveTask() {
    if (this.taskForm.invalid) return;

    const data = this.taskForm.value as ITask;

    const dueDate = ( data.dueDate as any) as NgbDate;
    data.dueDate = new Date(`${dueDate.year}-${dueDate.month-1}-${dueDate.day}`);

    /* This is for temporal id */
    data.id = Date.now();

    data.people = data.people.map(p => {
      p.skills = (p.skills as {skill: string}[]).map(s => s.skill);
      return p;
    });
    
    data.status = false;

    this.store.dispatch(createTask({ task: data })); 
  }
}

