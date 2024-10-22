import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class TextFieldComponent {
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl(); 

}
