import { Component } from '@angular/core';
import { HomeService } from '../Service/home.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent {
  public name: string = '';
  constructor(private home: HomeService) {}
  public submitForm(): void {
    console.log('This is name :' + this.name);
  }
}
