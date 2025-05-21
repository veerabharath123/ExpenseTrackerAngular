import { Injectable } from '@angular/core';
import { ApiService } from '../api-services/api.service';
import { GenericResponse } from 'src/app/models/classes/generic.class';
import { CategoryResponse } from 'src/app/models/classes/Category.class';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private apiServices:ApiService) { }

  GetPrimaryCategoryList() {
    return this.apiServices.post<CategoryResponse[]>('Ref/GetPrimaryCategoryList', null, false)
  }
}
