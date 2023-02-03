import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  // myForm: FormGroup;
  public formData: FormGroup;

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl('Sammy'),
      // email: new FormControl(''),
      // message: new FormControl(''),
    });
  }
}
