export class GenericResponse<T> {
    public success: boolean = false;
    public message: string = '';
    public result: T | null = null;
    public statusCode: number = 200;

  constructor(result: T | null | undefined) {
    this.result = result || null;
  }
}