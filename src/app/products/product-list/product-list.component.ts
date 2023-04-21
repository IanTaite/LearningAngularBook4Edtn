import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements AfterViewInit, OnInit {
  @ViewChild(ProductDetailComponent) productDetail:
    | ProductDetailComponent
    | undefined;

  products: Product[] = [];

  selectedProduct: Product | undefined;

  constructor(private productService: ProductsService) {
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onBuy(product: Product) {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log('AfterViewInit product-list', this.productDetail.product);
    }
  }
}
