import { Component, OnInit } from '@angular/core';
import { CategoryResponse } from 'src/app/models/classes/Category.class';
import { ExpenseResponse } from 'src/app/models/classes/Expense.class';
import { CategoryService } from 'src/app/services/category-services/category.service';
import { ExpenseService } from 'src/app/services/expense-services/expense.service';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css'
})
export class ExpenseTrackerComponent implements OnInit {
  
  expenses: ExpenseResponse[] = [];

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
}
