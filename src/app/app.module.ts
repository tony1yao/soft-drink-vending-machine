import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';
import { ResupplyStockComponent } from './resupply-stock/resupply-stock.component';
import { PurchaseComponent } from './purchase/purchase.component';
import * as fromApp from './store/reducers/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ResupplyStockComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromApp.FEATURE_KEY, fromApp.reducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
