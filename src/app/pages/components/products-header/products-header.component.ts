import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-products-header",
    templateUrl: "./products-header.component.html",
    styles: [],
})
export class ProductsHeaderComponent implements OnInit {
    @Output() layoutColumns = new EventEmitter<number>();
    sort = "desc";
    itemsCount = 12;
    constructor() {}

    ngOnInit(): void {}

    onSortUpdate(_sort: string): void {
        this.sort = _sort;
    }
    itemsToShow(item: number): void {
        this.itemsCount = item;
    }
    changeLayout(colsNum: number): void {
        this.layoutColumns.emit(colsNum);
    }
}
