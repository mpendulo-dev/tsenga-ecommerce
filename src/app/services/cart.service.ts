import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models/cart.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: "root",
})
export class CartService {
    cart = new BehaviorSubject<Cart>({ items: [] });

    constructor(private _snackBar: MatSnackBar) {}

    addToCart(item: CartItem): void {
        const items = [...this.cart.value.items];

        const ItemsInCart = items.find((_item) => _item.id === item.id);
        if (ItemsInCart) {
            ItemsInCart.quantity += 1;
        } else {
            items.push(item);
        }

        this.cart.next({ items });
        this._snackBar.open("1 Item added to cart", "Ok", { duration: 3000 });
        console.log(this.cart.value);
    }

    getTotal(items: Array<CartItem>): number {
        return items
            .map((item) => item.price * item.quantity)
            .reduce((prev, current) => prev + current, 0);
    }
}
