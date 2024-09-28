import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IControlField } from 'src/app/interfaces/control-field.interface';
import { controlFields } from './form';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  formFields: IControlField = controlFields;
  form!: FormGroup;
  people!: FormArray;

  constructor(
   private fb: FormBuilder,
   private controlContainer: ControlContainer
  ) {}

  private build(): void {
    this.form = this.controlContainer.control as FormGroup;
    this.people = this.fb.array([]);

    this.checkMinPerson();

    this.form.addControl('people', this.people);
  }

  ngOnInit(): void {
    this.build()
  }

  public addPerson(): void {
    const person = this.fb.group(this.formFields.fields);

    /* This is for temporal id for custom validator */
    person.controls['id'].patchValue(Date.now());

    this.people.push(person);
  }

  public removePerson(index: number): void {
    this.people.removeAt(index);
    this.checkMinPerson();
  }

  private checkMinPerson(): void {
    if(this.people.length === 0) this.addPerson();
  }

} 
