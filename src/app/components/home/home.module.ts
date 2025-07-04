import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './expense-tracker/add-expense/add-expense.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { SkeletonModule } from 'primeng/skeleton';

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
    TableModule,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
    SkeletonModule 
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
