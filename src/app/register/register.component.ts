import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      registerEmail: ['', [Validators.required, Validators.email]],
      registerPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  register() {
    // Your registration logic here
    console.log(this.registerForm.value);
  }
}
