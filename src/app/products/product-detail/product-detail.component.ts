import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnChanges, AfterViewInit {
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter<Product>();

  constructor() {
    console.log(`Name is ${this.product?.name} in the constructor`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log('Product changed from ${oldValue} to ${newValue}');
    }
  }

  ngOnInit() {
    console.log(`Name is ${this.product?.name} in ngOnInit`);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit product-detail');
  }

  buy() {
    this.bought.emit(this.product);
  }
}
