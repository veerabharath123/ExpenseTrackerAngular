export class GenericResponse<T> {
    public success: boolean = false;
    public message: string = '';
    public result: T | null = null;
    public statusCode: number = 200;

  constructor(result: T | null | undefined) {
    this.result = result || null;
  }
}

export class DateRequestDto{
    date1: Date | null = null;
    date2: Date | null = null;
}
export class DateRangeRequestDto{
    start: Date | null = null;
    end: Date | null = null;
}