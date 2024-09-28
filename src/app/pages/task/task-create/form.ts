import {Validators} from '@angular/forms';
import { IControlField } from 'src/app/interfaces/control-field.interface';

export const controlFields: IControlField = {
  messages: {
    taskName: {
      required: 'El nombre de la tarea es obligatorio'
    },
    dueDate: {
      required: 'La fecha límite es obligatoria'
    }
  },
  fields: {
    taskName: [null, [Validators.required]],
    dueDate: [null, [Validators.required]]
  }
};
