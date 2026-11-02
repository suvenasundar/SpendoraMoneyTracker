import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  user: { name: string; email: string } = {
    name: '',
    email: '',
  };
  submitForm(form:NgForm){
    if(form.valid){
      console.log(form.value, this.user)
    }
    else{
      console.log('invalid values')
    }
  }
}
