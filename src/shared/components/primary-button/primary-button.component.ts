import { Component, Input } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [IonButton],
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent {
  @Input() text: string = '';
  @Input() expand: string = 'block';
  @Input() disabled: boolean = false;
  @Input() onClick: () => void = () => {};
}
