import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-products-header",
    templateUrl: "./products-header.component.html",
    styles: [],
})
export class ProductsHeaderComponent implements OnInit {
    @Output() layoutColumns = new EventEmitter<number>();
    @Output() itemsCountChange = new EventEmitter<number>();
    @Output() sortChange = new EventEmitter<string>();
    
    sort = 'desc';
    itemsCount = 12;
    constructor() {}

    ngOnInit(): void {}

    onSortUpdate(newSort: string): void {
        this.sort = newSort;
        this.sortChange.emit(newSort);
    }
    itemsToShow(count: number): void {
        this.itemsCount = count;
        this.itemsCountChange.emit(count);
    }
    changeLayout(colsNum: number): void {
        this.layoutColumns.emit(colsNum);
    }
}
