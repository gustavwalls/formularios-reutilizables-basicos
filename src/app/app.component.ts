import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { TextFieldComponent } from './shared/components/text-field/text-field.component';
import { NumberFieldComponent } from './shared/components/number-field/number-field.component';
import { CheckboxFieldComponent } from './shared/components/checkbox-field/checkbox-field.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxModule,TextFieldComponent,NumberFieldComponent,CheckboxFieldComponent]
})
export class AppComponent {
  constructor(private fb: FormBuilder) {
  }

  public myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    age: [null, Validators.required],
    terms: [false, Validators.required],
  })

  get nameControl(): FormControl {
    return this.myForm.get('name') as FormControl;
  }

  get ageControl():FormControl{
    return this.myForm.get('age') as FormControl;
  }

  get termsControl():FormControl{
    return this.myForm.get('terms') as FormControl;
  }

  submitForm() {
    console.log(this.myForm.value);
  }

}
