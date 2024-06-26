import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ProductFacade } from '../state/product.facade';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Product } from '../common/product.interface';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent implements OnInit {
  products$!: Observable<Product[]>;
  isLoading$!: Observable<boolean>;

  constructor(private productFacade: ProductFacade) {}

  ngOnInit(): void {
    this.initProducts();
  }

  private initProducts(): void {
    this.isLoading$ = this.productFacade.isLoading$;
    this.products$ = this.productFacade.products$;
    // .pipe(
    //   tap((products: Product[]) => {
    //     console.group();
    //     console.log('Product page async observer emitting =>');
    //     return products.length === 0
    //       ? console.log('initial state is empty[]')
    //       : console.table(products);
    //   })
    // );
  }
}
