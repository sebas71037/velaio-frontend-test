import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IControlField } from 'src/app/interfaces/control-field.interface';
import { controlFields } from './form';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

  formFields: IControlField = controlFields;
  form!: FormGroup;
  skills!: FormArray;

  constructor(
   private fb: FormBuilder,
   private controlContainer: ControlContainer
  ) {}

  private build(): void {
    this.form = this.controlContainer.control as FormGroup;
    this.skills = this.fb.array([]);

    this.checkMinSkill();

    this.form.addControl('skills', this.skills);
  }

  ngOnInit(): void {
    this.build()
  }

  public addSkill(): void {
    const person = this.fb.group(this.formFields.fields);
    this.skills.push(person);
  }

  public removeSkill(index: number): void {
    this.skills.removeAt(index);
    this.checkMinSkill();
  }

  private checkMinSkill(): void {
    if(this.skills.length === 0) this.addSkill();
  }

}
