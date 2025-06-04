import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './expense-tracker/add-expense/add-expense.component';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ExpenseTrackerComponent,
    AddExpenseComponent
  ],
  imports: [
    HomeRoutingModule,
    ChartModule,
    DialogModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
