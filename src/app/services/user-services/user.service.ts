import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService:AuthService) { }

  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      // Simulate an API call
      setTimeout(() => {
        if (username === 'username' && password === 'password') {
          this.authService.setCurrentUser({ username: username, token: '1234567890', permissions: ['read', 'write'], roles: ['admin'] });
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, 1000);
    }
    );  
  }
}
