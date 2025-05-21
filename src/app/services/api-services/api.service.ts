import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, map, Observable, throwError } from 'rxjs';
import { GenericResponse } from 'src/app/models/classes/generic.class';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth-services/auth.service';
import { LoadingScreen } from '../../utils/loading-screen';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private loadingCounter: number = 0;
  private baseUrl: string = environment.apiUrl; 

  constructor(private http: HttpClient,private authService:AuthService) { }
  showLoading() {
    if (!LoadingScreen.isOpen() && this.loadingCounter > 0) {
      this.loadingCounter = 0;
    }
    this.loadingCounter++;
    if (this.loadingCounter > 1) {
      return;
    }
    LoadingScreen.open();
  }

  hideLoading() {
    this.loadingCounter--;
    if (this.loadingCounter > 0) {
      return;
    }
    LoadingScreen.hide();
  }
  post<T>(endpoint: string, body: any, requireAuth: boolean = true): Observable<GenericResponse<T>> {
    const observable = this.http.post<GenericResponse<T>>(`${this.baseUrl}/${endpoint}`, body, { headers : this.setHeaders(requireAuth) })

    return observable;
  }
  private setPipe<T>(observable:Observable<GenericResponse<T>>): Observable<GenericResponse<T>> {
    return observable.pipe(
      map((r) => {
        return r;
      }),
      finalize(() => {
        this.hideLoading();
      }),
      catchError((err: HttpErrorResponse) => { this.hideLoading(); return this.handleError(err); })
    );
  }
  private setHeaders(requireAuth: boolean = true): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (requireAuth) {
      const token = this.getToken();
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  }

  private getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let message = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      message = `Client error: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 0: message = 'No connection to server'; break;
        case 400: message = 'Bad request'; break;
        case 401: message = 'Unauthorized or token expired'; break;
        case 403: message = 'Forbidden'; break;
        case 404: message = 'Not found'; break;
        case 500: message = 'Server error'; break;
        default: message = `Error ${error.status}: ${error.statusText}`;
      }
    }

    if (error.status === 401) {
      this.authService.logout();
    }
    return throwError(() => new Error(message));
  }
}
