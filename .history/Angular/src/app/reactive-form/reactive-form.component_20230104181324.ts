import { HomeService } from './../Service/home.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  // myForm: FormGroup;
  public formData: FormGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    // email: new FormControl(''),
    // message: new FormControl(''),
  });
  constructor(private home: HomeService, private fb: FormBuilder) {}
  ngOnInit() {}
  public submitForm(): void {
    // console.log('Data:', this.formData.value);
    this.home.submitData(this.formData.value);
  }
}
