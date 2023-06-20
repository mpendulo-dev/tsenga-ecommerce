import { ProductsService } from './../../services/products.service';
import { Product } from 'src/app/models/product.model';
import { CartService } from './../../services/cart.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styles: [],
})
export class HomeComponent implements OnInit, OnDestroy {
    cols = 3;
    rowHeight = ROWS_HEIGHT[this.cols];
    category: string | undefined;

    //Products from API
    products: Array<Product> | undefined;

    //Prevent memory leaks
    productSubscription: Subscription | undefined;

    //sort and count
    sort = 'des';
    count = 12;

    constructor(private cartService: CartService, private productsService: ProductsService) {}

    ngOnInit(): void {
        this.getProducts();   
    }

    changeLayout(colsNum: number): void {
        this.cols = colsNum;
        this.rowHeight = ROWS_HEIGHT[this.cols];
    }
    onShowCategory(newCategory: string): void {
        this.category = newCategory;
    }
    changeItemsCount(itemsCount: number): void {
        this.count = itemsCount;
        this.getProducts();
    }
    changeSort(sort: string): void {
        this.sort = sort;
        this.getProducts();
    }
    onAddToCart(product: Product): void {
        this.cartService.addToCart({
            product: product.image,
            name: product.title,
            price: product.price,
            quantity: 1,
            id: product.id,
        });
    }
    getProducts() {
       this.productSubscription = this.productsService.getAllProducts(this.count, this.sort).subscribe(_products => {
            console.log(_products);   
            this.products = _products;   
        })
    }
    ngOnDestroy(): void {
        if(this.productSubscription) {
            this.productSubscription.unsubscribe();
        }
    }
}
