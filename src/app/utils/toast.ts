import { Injectable } from '@angular/core';
import { MessageService, Message } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastUtil {
    private defaultOptions = {
        life: 3000,
        styleClass: 'toast-animate toast-small',
        closable: true,
        sticky: false
    };

  constructor(private messageService: MessageService) {}

  show(
    severity: 'success' | 'info' | 'warn' | 'error',
    summary: string,
    detail: string,
    options?: {
      life?: number;           // Duration in ms
      key?: string;            // Toast key for custom containers
      styleClass?: string;     // Custom CSS class for animation
      closable?: boolean;      // Show close icon
      sticky?: boolean;        // If true, toast won't auto-dismiss
    }
  ) {
    const mergedOptions = { ...this.defaultOptions, ...options };
    const msg: Message = {
      severity,
      summary,
      detail,
      ...mergedOptions
    };
    this.messageService.add(msg);
  }

  showSuccess(summary: string, detail?: string, options?: any) {
    this.show('success', summary, detail || '', options);
  }

  showError(summary: string, detail?: string, options?: any) {
    this.show('error', summary, detail || '', options);
  }

  showInfo(summary: string, detail?: string, options?: any) {
    this.show('info', summary, detail || '', options);
  }

  showWarn(summary: string, detail?: string, options?: any) {
    this.show('warn', summary, detail || '', options);
  }

  clear(key?: string) {
    this.messageService.clear(key);
  }
}