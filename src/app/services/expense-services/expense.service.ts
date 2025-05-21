import { Injectable } from '@angular/core';
import { ExpenseResponse } from 'src/app/models/classes/Expense.class';
import { ApiService } from '../api-services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private apiServices:ApiService) { }

  GetUserExpensesList() {
    return this.apiServices.post<ExpenseResponse[]>('Expense/GetUserExpenses', null, false)
  }
}
