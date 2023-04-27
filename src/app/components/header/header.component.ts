import { CartService } from "./../../services/cart.service";
import { Component, OnInit, Input } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styles: [],
})
export class HeaderComponent implements OnInit {
    private _cart: Cart = { items: [] };
    itemsQuantity = 0;

    @Input()
    get cart(): Cart {
        return this._cart;
    }
    set cart(cart: Cart) {
        this._cart = cart;
        this.itemsQuantity = cart.items
            .map((item) => item.quantity)
            .reduce((prev, curr) => prev + curr, 0);
    }
    constructor(private cartService: CartService) {}

    ngOnInit(): void {}

    getTotal(items: Array<CartItem>): number {
        return this.cartService.getTotal(items);
    }
    clearCart() {
        this.cartService.clearCart();
    }
}
