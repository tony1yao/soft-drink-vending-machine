import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDisplayerComponent } from './stock-displayer.component';

describe('StockDisplayerComponent', () => {
  let component: StockDisplayerComponent;
  let fixture: ComponentFixture<StockDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDisplayerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
