import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInRequestDto } from 'src/app/models/classes/User.class';
import { AuthService } from 'src/app/services/auth-services/auth.service';
import { UserService } from 'src/app/services/user-services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signInForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSignIn(): void {
    debugger
    if (!this.signInForm.valid) {
      console.error('Form is invalid');
      return;
    }

    const request = this.signInForm.value as SignInRequestDto;
    this.userService.login(request).subscribe(r =>{
      if (r) {
        if(r.success) {
          this.authService.setCurrentUser(r.result!);
          console.log('Login successful',r);
          this.router.navigate(['/home']);
        }
      } else {
        console.error('Login failed');
      }
    })
  }
}
