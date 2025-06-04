import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { CategoryResponse } from 'src/app/models/classes/Category.class';
import { ExpenseRequest } from 'src/app/models/classes/Expense.class';
import { CategoryService } from 'src/app/services/category-services/category.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent implements OnInit {
  categories: CategoryResponse[] = [];
  expenseForm!: FormGroup;
  maxDate: string = '';
  @Output() saveExpense = new EventEmitter<ExpenseRequest|null>();

  constructor(
    private categoryService:CategoryService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.getCategories();
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
  }
  initForm(){
     this.expenseForm = this.fb.group({
      name: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(0.01)]],
      description: [''],
      date: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
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
   if(this.expenseForm.invalid) {
      return;
    }
    const data = this.expenseForm.value as ExpenseRequest
    this.saveExpense.emit(data);
  }
  resetForm() {
    this.expenseForm.reset();
  }
}
