import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPermission } from '../../models/interfaces/user-auth.interface';
import { GeneralConstants } from '../../utils/constants/general-constants';
import { LocalStorageUtil } from '../../utils/local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: AuthPermission | null = null;
  constructor(private router: Router) { }
  logout(): void {
    LocalStorageUtil.removeItem(GeneralConstants.LOCAL_STORAGE_USER_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return LocalStorageUtil.hasKey(GeneralConstants.LOCAL_STORAGE_USER_KEY);
  }
  getCurrentUser(): AuthPermission | null {
    if (!this.currentUser) {
      this.currentUser = LocalStorageUtil.getItem<AuthPermission>(GeneralConstants.LOCAL_STORAGE_USER_KEY);
    }
    return this.currentUser;
  }
  setCurrentUser(userAuth: AuthPermission): void {
    this.currentUser = userAuth
    LocalStorageUtil.setItem(GeneralConstants.LOCAL_STORAGE_USER_KEY,userAuth);
  }

  hasPermission(permission: string): boolean {
    const user = this.getCurrentUser();
    return user?.permissions.includes(permission) || false;
  }
}
