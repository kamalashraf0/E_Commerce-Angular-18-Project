import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  form = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
    email : new FormControl('')

  })

  onSubmit(){

      console.log(this.form);

  }
}
