export class BarChartRequestDto
{
    basicData:BasicData|null = null;
    message:string = '';
}
export class BasicData
{
    labels:string[] = [];
    datasets:BarChartDataSet[] = [];
}
export class BarChartDataSet
{
    label:string = '';
    data = [];

    backgroundColor:string[] = [];
    borderColor:string[] = [];
    borderWidth:number = 1;
}