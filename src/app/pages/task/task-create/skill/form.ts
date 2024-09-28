import {Validators} from '@angular/forms';
import { IControlField } from 'src/app/interfaces/control-field.interface';

export const controlFields: IControlField = {
  messages: {
    skill: {
      required: 'La habilidad es requerida persona es obligatorio'
    }
  },
  fields: {
    skill: [null, [Validators.required, Validators.minLength(5)]]
  }
};
