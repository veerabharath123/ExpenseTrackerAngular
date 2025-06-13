import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense-services/expense.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    basicData: any;
    note:string = '';
    rangeDates: Date[]|undefined = [];
    basicOptions: any;

    constructor(private expenseService:ExpenseService) { }

    ngOnInit() {
        this.loadWeeklyExpenseData();
        this.loadBasicOptions();
    }

    loadWeeklyExpenseData() {
        const today = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 6);
        this.rangeDates = [sevenDaysAgo, today];

        this.expenseService.GetWeeklyExpense().subscribe({
            next: (response) => {
                if (response.success) {
                this.basicData = response.result?.basicData as any;
                this.note = response.result?.message || '';
                    console.log('Weekly expense data:', this.basicData);
                } else {
                    console.error('Failed to fetch weekly expense data:', response.message);
                }
            },
            error: (error) => {
                console.error('Error fetching weekly expense data:', error);
            },
            complete: () => {
                console.log('Weekly expense data fetching completed.');
            }
        })
    }

    loadBasicOptions(){
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
    getWeekly(){
        this.loadWeeklyExpenseData();
    }
    getRange(data:any){
        if (this.rangeDates && this.rangeDates.length === 2 && this.rangeDates[0] && this.rangeDates[1]) {
            const request = {
                start: this.rangeDates[0],
                end: this.rangeDates[1]
            };
            this.expenseService.GetExpenseFromDateRange(request).subscribe({
                next: (response) => {
                    if (response.success) {
                    this.basicData = response.result?.basicData as any;
                    this.note = response.result?.message || '';
                        console.log('Weekly expense data:', this.basicData);
                    } else {
                        console.error('Failed to fetch weekly expense data:', response.message);
                    }
                },
                error: (error) => {
                    console.error('Error fetching weekly expense data:', error);
                },
                complete: () => {
                    console.log('Weekly expense data fetching completed.');
                }
            })
        }
    }
}
