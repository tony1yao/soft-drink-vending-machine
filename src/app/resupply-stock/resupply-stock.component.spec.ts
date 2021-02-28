import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '../shared/shared.module';
import { State } from '../store/reducers/app.reducer';
import * as appSelector from '../store/selectors/app.selector';
import { ResupplyStockComponent } from './resupply-stock.component';

describe('ResupplyStockComponent', () => {
  let component: ResupplyStockComponent;
  let fixture: ComponentFixture<ResupplyStockComponent>;

  let store: MockStore<State>;
  const initialState = {stock: 1, totalSold: 0};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResupplyStockComponent ],
      imports: [SharedModule,
        BrowserAnimationsModule
      ],
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            {
              selector: appSelector.selectStock,
              value: 1
            },
            {
              selector: appSelector.selectTotalSold,
              value: 0
            }
          ]})
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResupplyStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fail if resupply 101 cans of drink since the maximum stock limit is 100', () => {
    component.numberToResupply = 101;
    component.onResupply();
    expect(component.notificationMsg).toContain('Failed to resupply');
  });

  it('should succeed if current stock is 1 and tries to resupply 50 cans of drink', () => {
    component.numberToResupply = 50;
    component.onResupply();
    appSelector.selectStock.setResult(51);
    store.refreshState();
    expect(component.stock).toEqual(51);
  });
});
