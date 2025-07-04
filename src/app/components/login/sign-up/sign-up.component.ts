import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { safeSubscribe } from '../../../utils/safe-subscribe';
import { UserService } from 'src/app/services/user-services/user.service';
import { SignUpRequestDto } from 'src/app/models/classes/User.class';
import { GenericResponse } from 'src/app/models/classes/generic.class';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder,private userServices:UserService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSignUp(): void {
    if (this.signUpForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    const request = this.signUpForm.value as SignUpRequestDto;
  
    this.userServices.login(request).subscribe({
      next: (response) => {
        if (response.success) {
          console.log('Sign up successful');
        } else {
          console.error('Sign up failed:', response.message);
        }
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      },
      complete: () => {
        console.log('Category fetching completed.');
      }
    });
  }
}
