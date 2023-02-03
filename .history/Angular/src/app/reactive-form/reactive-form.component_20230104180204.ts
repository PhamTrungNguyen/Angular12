import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  // myForm: FormGroup;
  public formData: FormGroup = new FormGroup({
    name: new FormControl('nguyen'),
    // email: new FormControl(''),
    // message: new FormControl(''),
  });

  ngOnInit() {}
  public submitForm(): void {}
}
