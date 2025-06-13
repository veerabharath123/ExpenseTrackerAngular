import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { ExpenseRequest, ExpenseResponse } from 'src/app/models/classes/Expense.class';
import { ExpenseService } from 'src/app/services/expense-services/expense.service';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { DateRequestDto } from 'src/app/models/classes/generic.class';
import { ToastUtil } from 'src/app/utils/toast';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css'
})
export class ExpenseTrackerComponent implements OnInit {
  
  expenses: ExpenseResponse[] = [];
  openAddExpenseModal: boolean = false;
  isloading: boolean = true;
  @ViewChild(AddExpenseComponent) addExpenseComponent!: AddExpenseComponent;  
  @Input() date: Date|null = null;

  constructor(
    private expenseService:ExpenseService,
    private toast: ToastUtil
  ) {

  }

  ngOnInit() {
    this.date = new Date();
    this.getUserExpensesList(this.date);
  }
  selectCategory(categoryId: any) {
    console.log('Selected category:', categoryId);  
  }
  getUserExpensesList(date: Date) {
    const request: DateRequestDto = {
      date1: date,
      date2: null
    };
    
    this.expenseService.GetUserExpensesList(request).subscribe({
      next: (response) => {
        if(response.success) {
          this.expenses = response.result || [];
          console.log('User expenses:', response);
          this.toast.showSuccess('Expenses loaded sucessfully');
          this.isloading = false;
        }
      },
      error: (error) => {
        console.error('Error fetching user expenses:', error);
      },
      complete: () => {
        console.log('User expenses fetching completed.');
      }
    });
  }
  onHideModal() {
    this.openAddExpenseModal = false;
    if (this.addExpenseComponent) {
      this.addExpenseComponent.resetForm();
    }
  }
  onSaveExpense(expense: ExpenseRequest|null) {
    if(!expense) {
      return;
    }

    this.expenseService.AddExpense(expense).subscribe({
      next: (response) => {
        if(response.success) {

          this.getUserExpensesList(this.date!);
          this.openAddExpenseModal = false;
          
        } else {
          console.error('Failed to add expense:', response.message);
        }
      },
      error: (error) => {
        console.error('Error adding expense:', error);
      },
      complete: () => {
        console.log('Expense addition completed.');
      }
    });

    
  }
  
}
