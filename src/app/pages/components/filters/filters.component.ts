import { Subscription } from 'rxjs';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from "@angular/core";

@Component({
    selector: "app-filters",
    templateUrl: "./filters.component.html",
})
export class FiltersComponent implements OnInit, OnDestroy {
    @Output() showCategory = new EventEmitter<string>();

    categories: Array<string> | undefined;
    categorySubscriptions: Subscription | undefined;

    constructor(private productsService: ProductsService) {}

    ngOnInit(): void {
       this.categorySubscriptions = this.productsService.getAllCategories().subscribe(_categories => {
            this.categories = _categories;
            console.log(this.categories);
            
        })
    }
    onShowCategory(category: string): void {
        this.showCategory.emit(category);
    }
    ngOnDestroy(): void {
        if(this.categorySubscriptions) {
            this.categorySubscriptions.unsubscribe();
        }
    }
}
