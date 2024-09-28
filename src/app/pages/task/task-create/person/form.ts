import {Validators} from '@angular/forms';
import { IControlField } from 'src/app/interfaces/control-field.interface';
import { uniqueFullNameValidator } from 'src/app/validators/unique-field.validator';

export const controlFields: IControlField = {
  messages: {
    fullName: {
      required: 'El nombre de la persona es obligatorio',
      minlength: 'Nombre debe tener al menos 5 caracteres',
      notunique: 'Persona ya asignada'
    },
    age: {
      required: 'La fecha límite es obligatoria',
      min: 'Debe ser mayor de edad (18 años)'
    }
  },
  fields: {
    fullName: [null, [Validators.required, Validators.minLength(5), uniqueFullNameValidator('fullName', 'id')]],
    age: [null, [Validators.required, Validators.min(18)]],
    id: [null, []]
  }
};
