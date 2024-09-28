import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from 'src/app/store/task/task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from 'src/app/store/task/task.effect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'src/app/modules/custom-forms/custom-forms.module';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonComponent } from './task-create/person/person.component';
import { SkillComponent } from './task-create/skill/skill.component';
import { EFeatureKey } from 'src/app/enum/feature-key.enum';
import { CardTaskComponent } from './card-task/card-task.component';

@NgModule({
  declarations: [
    TaskComponent,
    TaskCreateComponent,
    PersonComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TaskRoutingModule,
    /* Redux */
    StoreModule.forFeature(EFeatureKey.TASK, taskReducer),
    EffectsModule.forFeature([TaskEffects]),
    /* Modules */
    CustomFormsModule,
    NgbDatepickerModule,
    /* Standalone component */
    CardTaskComponent
  ]
})
export class TaskModule { }
