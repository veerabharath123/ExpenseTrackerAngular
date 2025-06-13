import { Observable } from 'rxjs';

export function safeSubscribe<T>(
  obs$: Observable<T>,
  next: (value: T) => void,
  options?: {
    error?: (err: any) => void;
    complete?: () => void;
  }
) {
  return obs$.subscribe({
    next,
    error: options?.error ?? ((err) => console.error('Error:', err)),
    complete: options?.complete ?? (() => {})
  });
}