import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MAX_NUMBER_TO_DISPLAY } from '../../model/shared-model';

@Component({
  selector: 'app-stock-displayer',
  templateUrl: './stock-displayer.component.html',
  styleUrls: ['./stock-displayer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDisplayerComponent implements OnInit, OnChanges {
  @Input() stock: number;

  /** Number of drinks to display on screen */
  numberToDisplay: number;
  /** Array to hold the class of images to display */
  imgClasses: string[];
  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.stock.currentValue) {
      /** The maximum number of drinks to display is defined by MAX_NUMBER_TO_DISPLAY */
      this.numberToDisplay = this.stock > MAX_NUMBER_TO_DISPLAY ? MAX_NUMBER_TO_DISPLAY : this.stock;
      this.imgClasses = [];
      for (let index = 0; index < this.numberToDisplay; index++) {
        this.imgClasses.push(`image-stack-item-${index}`);
      }
    }
  }

}
