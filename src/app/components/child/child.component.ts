import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  userForm! :FormGroup;

  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required]
      }),
      phonenumbers: this.fb.array([
        this.fb.control('', [Validators.required, Validators.pattern(/^\d{10}$/)])
      ])
    })

  }

  submitForm(){
    if(this.userForm.valid){
      console.log(this.userForm.value, this.userForm)
    }
  }

}
