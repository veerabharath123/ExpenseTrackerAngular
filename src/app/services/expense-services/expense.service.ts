import { Injectable } from '@angular/core';
import { ExpenseRequest, ExpenseResponse } from 'src/app/models/classes/Expense.class';
import { ApiService } from '../api-services/api.service';
import { GenericResponse } from 'src/app/models/classes/generic.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private apiServices:ApiService) { }

  GetUserExpensesList() {
    return this.apiServices.post<ExpenseResponse[]>('Expense/GetUserExpenses', null, false)
  }
  AddExpense(request: ExpenseRequest):Observable<GenericResponse<boolean>> {
    return this.apiServices.post<boolean>('Expense/InsertUserExpense', request, false)
  }
}
