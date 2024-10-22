import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class NumberFieldComponent {
  @Input() label: string = '';
  @Input() control!: FormControl;
}
