import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-services/auth.service';
import { SignInRequestDto, SignUpRequestDto } from 'src/app/models/classes/User.class';
import { ApiService } from '../api-services/api.service';
import { GenericResponse } from 'src/app/models/classes/generic.class';
import { AuthPermission } from 'src/app/models/interfaces/user-auth.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiServices:ApiService) { }

  login(request: SignInRequestDto): Observable<GenericResponse<AuthPermission>> {
    return this.apiServices.post<AuthPermission>('User/Login', request, false)
  }
}
