import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { SkeletonModule } from 'primeng/skeleton';
import { ExpenseRoutingModule } from './expenses-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    ExpenseRoutingModule,
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
export class ExpenseModule { }
