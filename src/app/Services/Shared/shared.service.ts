import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private snack: MatSnackBar) { }

  // this.service.getVertical();
  private dataSource = new BehaviorSubject<any>(null);
  public data$ = this.dataSource.asObservable();

  updateData(data: any) {
    this.dataSource.next(data);
  }

  successAction = 'Ok';
  errorAction = 'Cancel';
  notifyAction = 'Undo';

  snackDuration = 7000;

  success(message: any) {
    this.snack.open(message, this.successAction,
      {
        duration: this.snackDuration,
        // politeness: 'polite' // or 'assertive' or 'off'

      });
  }

  error(message: any) {
    this.snack.open(message, this.errorAction, { duration: this.snackDuration });
  }

  notify(message: any) {
    this.snack.open(message, this.notifyAction, { duration: this.snackDuration });
  }

}
