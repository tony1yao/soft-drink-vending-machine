import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private snackBar: MatSnackBar) {}

  notify(messageKey: string): void {
      this.openSnackBar(messageKey);
  }

  private openSnackBar(messageKey: string): void {
    this.snackBar.open(messageKey, 'OK', {
      duration: 6000
  });
  }
}
