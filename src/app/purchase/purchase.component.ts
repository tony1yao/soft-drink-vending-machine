import { Component, OnDestroy, OnInit } from '@angular/core';
import { Coin, ERROR_INSUFFICIENT_MONEY, ERROR_NOT_ENOUGH_STOCK, ERROR_OUT_OF_STOCK, VALUE_PER_CAN } from '../shared/model/shared-model';
import data from '../../assets/data.json';
import { select, Store } from '@ngrx/store';
import * as AppActions from '../store/actions/app.actions';
import * as fromApp from '../store/selectors/app.selector';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { NotificationService } from '../core/services/notification.service';
import { Utils } from '../shared/utils/utils';

@AutoUnsubscribe()
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit, OnDestroy {
  stock: number;
  numberToPurchase: number;
  currentBalance: number;
  errorMsg: string;
  change: number;
  coinsToDisplay: Coin[];

  constructor(private store: Store,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.currentBalance = 0;
    this.numberToPurchase = 0;
    this.coinsToDisplay = data;

    this.store.pipe(
      select(fromApp.selectStock)
    ).subscribe(
      stock => this.stock = stock
    );
  }

  onInsertCoin(coin: Coin): void {
    this.currentBalance = this.formatNumber(this.currentBalance + Number.parseFloat(coin.value));
  }

  onPurchase(): void {
    this.errorMsg = null;
    if (this.getTotalValue() > this.currentBalance) {
      this.errorMsg = ERROR_INSUFFICIENT_MONEY;
    } else if (this.stock === 0) {
      this.errorMsg = ERROR_OUT_OF_STOCK;
    } else if (this.numberToPurchase > this.stock){
      this.errorMsg = ERROR_NOT_ENOUGH_STOCK;
    } else {
      this.purchaseSucceed();
    }

    if (this.errorMsg) {
      this.notificationService.notify(this.errorMsg);
    }

    this.numberToPurchase = 0;
  }

  /**
   * Returns total value of drink to purchase.
   */
  getTotalValue(): number {
    return this.numberToPurchase * VALUE_PER_CAN;
  }

  purchaseSucceed(): void{
    this.change = this.formatNumber(this.currentBalance - this.getTotalValue());
    this.store.dispatch(AppActions.itemSold({numberSold: this.numberToPurchase}));
    const drinkString = Utils.getDrinkString(this.numberToPurchase);
    this.notificationService.notify(`Succesfully purchased ${this.numberToPurchase} ${drinkString}, your change is:  ${this.change}`);

    this.currentBalance = 0;
  }

  private formatNumber(inputNum: number): number {
    return parseFloat(inputNum.toFixed(1));
  }

  ngOnDestroy(): void {
    // Leave this method empty for auto-unsubscribe to work
  }
}
