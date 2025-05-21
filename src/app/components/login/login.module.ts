import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginRoutingModule } from './login-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    LoginRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
