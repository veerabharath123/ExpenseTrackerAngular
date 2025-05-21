import { Component, OnInit } from '@angular/core';
import { CategoryResponse } from 'src/app/models/classes/Category.class';
import { CategoryService } from 'src/app/services/category-services/category.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent implements OnInit {
  categories: CategoryResponse[] = [];

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.GetPrimaryCategoryList().subscribe({
      next: (response) => {
        if(!response.success) {
          return
        }

        this.categories = response.result || [];
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      },
      complete: () => {
        console.log('Category fetching completed.');
      }
    });
  }

  addExpense() {
   
  }

}
