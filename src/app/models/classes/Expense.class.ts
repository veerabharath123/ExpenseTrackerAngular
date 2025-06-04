export class ExpenseResponse{
    name: string = '';
    description: string = '';
    amount: number = 0;
    date: string = '';
    categoryName: string = '';
    categoryId: number = 0;
    id: string = '';
}
export class ExpenseRequest{
    name: string = '';
    description: string = '';
    amount: number = 0;
    date: string = '';
    categoryId: string = '';
}