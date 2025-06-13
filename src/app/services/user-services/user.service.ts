import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-services/auth.service';
import { SignUpRequestDto } from 'src/app/models/classes/User.class';
import { ApiService } from '../api-services/api.service';
import { GenericResponse } from 'src/app/models/classes/generic.class';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiServices:ApiService) { }

  login(request: SignUpRequestDto): Observable<GenericResponse<boolean>> {
    return this.apiServices.post<boolean>('User/InsertUser', request, false)
  }
}
