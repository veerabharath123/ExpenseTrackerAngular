import { Component, OnInit,ViewChild } from '@angular/core';
import { ExpenseRequest, ExpenseResponse } from 'src/app/models/classes/Expense.class';
import { ExpenseService } from 'src/app/services/expense-services/expense.service';
import { AddExpenseComponent } from './add-expense/add-expense.component';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css'
})
export class ExpenseTrackerComponent implements OnInit {
  
  expenses: ExpenseResponse[] = [];
  openAddExpenseModal: boolean = false;
  @ViewChild(AddExpenseComponent) addExpenseComponent!: AddExpenseComponent;  

  constructor(
    private expenseService:ExpenseService
  ) {

  }

  ngOnInit() {
    
    this.getUserExpensesList();
  }
  selectCategory(categoryId: any) {
    console.log('Selected category:', categoryId);  
  }
  getUserExpensesList() {
    this.expenseService.GetUserExpensesList().subscribe({
      next: (response) => {
        if(response.success) {
          this.expenses = response.result || [];
          console.log('User expenses:', response);
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
          this.getUserExpensesList();
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
