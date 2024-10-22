import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxModule]
})
export class CheckboxFieldComponent {
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl(); 
}
