import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { StockDisplayerComponent } from './component/stock-displayer/stock-displayer.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [StockDisplayerComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    StockDisplayerComponent
  ]
})
export class SharedModule { }
