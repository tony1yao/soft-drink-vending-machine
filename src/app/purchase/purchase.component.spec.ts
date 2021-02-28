import {  ComponentFixture,  TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ERROR_INSUFFICIENT_MONEY, ERROR_NOT_ENOUGH_STOCK, ERROR_OUT_OF_STOCK } from '../shared/model/shared-model';
import { SharedModule } from '../shared/shared.module';
import * as fromApp from '../store/reducers/app.reducer';
import * as appSelector from '../store/selectors/app.selector';
import { PurchaseComponent } from './purchase.component';

describe('PurchaseComponent', () => {
  let component: PurchaseComponent;
  let fixture: ComponentFixture<PurchaseComponent>;
  const tenCentsCoin = { url: '', name: '', value: '0.1' };
  const twentyCentsCoin = { url: '', name: '', value: '0.2' };
  const fiftyCentsCoin = { url: '', name: '', value: '0.5' };
  const oneDollarCoin = { url: '', name: '', value: '1' };
  const twoDollarsCoin = { url: '', name: '', value: '2' };
  let store: MockStore<fromApp.State>;

  const initialState = {stock: 1, totalSold: 0};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseComponent ],
      imports: [SharedModule,
        BrowserAnimationsModule
      ],
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            {
              selector: appSelector.selectStock,
              value: {stock: 1}
            }
          ]})
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);

    component.currentBalance = 0;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show ballance of $3.8 if customer inserts a 10 cents, a 20 cents, a 50 cents, a 1 dollar and a 2 dollar coins', () => {
    component.onInsertCoin(tenCentsCoin);
    component.onInsertCoin(twentyCentsCoin);
    component.onInsertCoin(fiftyCentsCoin);
    component.onInsertCoin(oneDollarCoin);
    component.onInsertCoin(twoDollarsCoin);
    expect(component.currentBalance).toEqual(3.8);
  });

  it('should complete the purchase and return $0.8 change if current stock is 1 and customer purchases 1 can with $2', () => {
    component.stock = 1;
    component.onInsertCoin(twoDollarsCoin);
    component.numberToPurchase = 1;
    component.onPurchase();
    expect(component.errorMsg).toBe(null);
    expect(component.change).toEqual(0.8);
  });

  it('should fail due to insufficient money if customer purchases 1 can with $1', () => {
    component.stock = 0;
    component.onInsertCoin(oneDollarCoin);
    component.numberToPurchase = 1;
    component.onPurchase();
    expect(component.errorMsg).toBe(ERROR_INSUFFICIENT_MONEY);
  });

  it('should fail due to out of stock if current stock is 0 and customer purchases 1 can with $1.5', () => {
    component.stock = 0;
    component.onInsertCoin(oneDollarCoin);
    component.onInsertCoin(fiftyCentsCoin);
    component.numberToPurchase = 1;
    component.onPurchase();
    expect(component.errorMsg).toBe(ERROR_OUT_OF_STOCK);
  });

  it('should complete the purchase and return $1.4 change if current stock is 10 and customer purchases 3 cans with $5', () => {
    component.stock = 10;
    component.onInsertCoin(oneDollarCoin);
    component.onInsertCoin(twoDollarsCoin);
    component.onInsertCoin(twoDollarsCoin);
    component.numberToPurchase = 3;
    component.onPurchase();
    expect(component.errorMsg).toBe(null);
    expect(component.change).toEqual(1.4);
  });

});
