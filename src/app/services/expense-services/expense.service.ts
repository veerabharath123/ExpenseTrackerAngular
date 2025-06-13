import { Injectable } from '@angular/core';
import { ExpenseRequest, ExpenseResponse } from 'src/app/models/classes/Expense.class';
import { ApiService } from '../api-services/api.service';
import { DateRangeRequestDto, DateRequestDto, GenericResponse } from 'src/app/models/classes/generic.class';
import { Observable } from 'rxjs';
import { BarChartRequestDto } from 'src/app/models/classes/Charts.class';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private apiServices:ApiService) { }

  GetUserExpensesList(request:DateRequestDto) {
    return this.apiServices.post<ExpenseResponse[]>('Expense/GetUserExpenses', request, false)
  }
  AddExpense(request: ExpenseRequest):Observable<GenericResponse<boolean>> {
    return this.apiServices.post<boolean>('Expense/InsertUserExpense', request, false)
  }
  GetWeeklyExpense():Observable<GenericResponse<BarChartRequestDto>> {
    return this.apiServices.post<BarChartRequestDto>('Expense/GetWeeklyExpense', null, false)
  }
  GetExpenseFromDateRange(request: DateRangeRequestDto):Observable<GenericResponse<BarChartRequestDto>> {
    return this.apiServices.post<BarChartRequestDto>('Expense/GetExpenseFromDateRange', request, false)
  }
}
