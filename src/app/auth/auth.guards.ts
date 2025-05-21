import { inject, Injectable } from '@angular/core';
import {  CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-services/auth.service';

export const AuthGuard: CanActivateFn = () => {debugger
    const authService = inject(AuthService);
    const router = inject(Router);
  
    if (authService.isLoggedIn()) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
};