import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private authServices:AuthService) { }

  onLogout(): void {
    this.authServices.logout();
    console.log('User logged out');
  }

  get currentUser() {
    const user = this.authServices.getCurrentUser();
    return user ? user.userName : 'Guest';
  }
}
