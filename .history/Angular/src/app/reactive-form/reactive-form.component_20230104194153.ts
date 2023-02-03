import { HomeService } from './../Service/home.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  // myForm: FormGroup;
  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),

  // });
  public formData = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
  });
  submitted = false;

  constructor(private home: HomeService, private fb: FormBuilder) {}
  ngOnInit() {
    // if (this.formData.get('name').dirty) {
    //   // validate the name field
    // }
  }
  public submitForm(): void {
    // console.log('Data:', this.formData.value);
    this.home.submitData(this.formData.value);
    this.submitted = true;
    console.log(this.formData.controls);
  }
}
