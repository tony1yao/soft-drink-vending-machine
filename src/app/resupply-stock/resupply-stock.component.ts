import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Observable } from 'rxjs';
import { NotificationService } from '../core/services/notification.service';
import { MAX_STOCK_LIMIT } from '../shared/model/shared-model';
import { Utils } from '../shared/utils/utils';
import * as AppActions from '../store/actions/app.actions';
import * as fromApp from '../store/selectors/app.selector';

@AutoUnsubscribe()
@Component({
  selector: 'app-resupply-stock',
  templateUrl: './resupply-stock.component.html',
  styleUrls: ['./resupply-stock.component.scss']
})
export class ResupplyStockComponent implements OnInit, OnDestroy {

  constructor(private store: Store,
              private notificationService: NotificationService) { }

  notificationMsg: string;
  numberToResupply: number;
  stock: number;
  totalSold$: Observable<number>;

  ngOnInit(): void {
    this.numberToResupply = 0;
    this.store.pipe(
      select(fromApp.selectStock)
    ).subscribe(
      stock => this.stock = stock
    );

    this.totalSold$ = this.store.pipe(
      select(fromApp.selectTotalSold)
    );
  }

  onResupply(): void {
    if (this.numberToResupply + this.stock > MAX_STOCK_LIMIT) {
      this.notificationMsg = `Failed to resupply, maximum stock is ${MAX_STOCK_LIMIT}`;
    } else {
      const drinkString = Utils.getDrinkString(this.numberToResupply);
      this.store.dispatch(AppActions.itemResupplied({numberResupplied: this.numberToResupply}));
      this.notificationMsg = `Successfully resupplied ${this.numberToResupply} ${drinkString}`;
    }

    this.notificationService.notify(this.notificationMsg);
    this.numberToResupply = 0;
  }

  ngOnDestroy(): void {
    // Leave this method empty for auto-unsubscribe to work
  }
}
